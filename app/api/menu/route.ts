import { NextResponse } from "next/server";
import { google } from "googleapis";
import type { MenuItem } from "@/model";

const SHEET_RANGE = process.env.GOOGLE_SHEET_RANGE ?? "A5:J1000";

const CATEGORIAS = [
  "CAFETERIA",
  "BEBIDA",
  "REGIONAL",
  "CARNES",
  "GUARNICION",
  "PASTAS",
  "POSTRE",
] as const;

function isCategory(val: string): val is (typeof CATEGORIAS)[number] {
  return CATEGORIAS.includes(val.trim().toUpperCase() as (typeof CATEGORIAS)[number]);
}

function parsePrecio(val: string | number | boolean | undefined): number | null {
  if (val === undefined || val === null || typeof val === "boolean") return null;
  if (typeof val === "number" && !Number.isNaN(val)) return val;
  const s = String(val).trim();
  if (!s || s === "-") return null;
  const cleaned = s
    .replace(/[\s$€]/g, "")
    .replace(/\./g, "")
    .replace(",", ".");
  if (!cleaned) return null;
  const n = Number(cleaned);
  return Number.isNaN(n) ? null : n;
}

function parseBool(val: string | undefined): boolean {
  if (!val) return false;
  const v = val.trim().toUpperCase();
  return v === "TRUE" || v === "1" || v === "SI" || v === "ON";
}

function parseBoolOrNull(val: string | undefined): boolean | null {
  if (val === undefined || val === "") return null;
  const v = val.trim().toUpperCase();
  if (v === "ON") return true;
  if (v === "OFF") return false;
  return null;
}

function rowToMenuItem(row: (string | number | boolean)[]): MenuItem | null {
  const cells = row.map((c) => String(c ?? "").trim());
  if (cells.every((c) => !c)) return null;

  let id: number | null = null;
  let nombre = "";
  let categoria = "CAFETERIA" as (typeof CATEGORIAS)[number];
  let descripcion = "";
  let description = "";
  let precio: number | null = null;
  let vegetariano = false;
  let sinTacc = false;
  let onOff: boolean | null = null;
  let foto: string | undefined = undefined;

  const catIdx = cells.findIndex((c) => isCategory(c));
  if (catIdx < 0) return null;

  categoria = cells[catIdx].toUpperCase() as (typeof CATEGORIAS)[number];
  nombre = (cells[catIdx - 1] ?? "").trim();
  if (!nombre) return null;

  if (catIdx >= 1 && /^\d+$/.test(cells[0] ?? "")) {
    id = Number(cells[0]);
  }

  const rawRow = row;
  for (let i = catIdx + 1; i < cells.length; i++) {
    const cell = cells[i];
    const rawCell = rawRow[i];
    if (!cell) continue;

    const parsedPrecio = parsePrecio(rawCell ?? cell);
    if (parsedPrecio !== null) {
      precio = parsedPrecio;
      continue;
    }

    const parsedOnOff = parseBoolOrNull(cell);
    if (parsedOnOff !== null) {
      onOff = parsedOnOff;
      continue;
    }

    if (cell.toUpperCase() === "SI") {
      if (!vegetariano) vegetariano = true;
      else if (!sinTacc) sinTacc = true;
      continue;
    }

    if (cell.length > 20 && !descripcion) {
      descripcion = cell;
    } else if (cell.length > 20 && descripcion && !description) {
      description = cell;
    }
  }

  const fotoCell = cells[9];
  if (fotoCell && fotoCell.trim().length > 0) {
    foto = fotoCell.trim();
  }

  return {
    id,
    nombre,
    categoria,
    descripcion,
    description,
    precio,
    vegetariano,
    sinTacc,
    onOff,
    foto,
  };
}

export async function GET() {
  try {
    const sheetId = process.env.GOOGLE_SHEET_ID;
    const serviceEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY;
    const apiKey = process.env.GOOGLE_API_KEY;

    if (!sheetId) {
      return NextResponse.json(
        { error: "GOOGLE_SHEET_ID is not configured" },
        { status: 500 },
      );
    }

    let auth;

    if (serviceEmail && privateKey) {
      auth = new google.auth.GoogleAuth({
        credentials: {
          client_email: serviceEmail,
          private_key: privateKey.replace(/\\n/g, "\n"),
        },
        scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
      });
    } else if (apiKey) {
      auth = apiKey;
    } else {
      return NextResponse.json(
        {
          error:
            "Configure GOOGLE_SERVICE_ACCOUNT_EMAIL + GOOGLE_PRIVATE_KEY or GOOGLE_API_KEY",
        },
        { status: 500 },
      );
    }

    const sheets = google.sheets({ version: "v4", auth });
    const res = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range: SHEET_RANGE,
      valueRenderOption: "UNFORMATTED_VALUE",
    });

    const rows = (res.data.values || []) as (string | number | boolean)[][];
    const items: MenuItem[] = rows
      .map(rowToMenuItem)
      .filter((item): item is MenuItem => item !== null && item.nombre.length > 0);

    return NextResponse.json(items);
  } catch (err) {
    console.error("Google Sheets API error:", err);
    return NextResponse.json(
      { error: "Failed to fetch menu data" },
      { status: 500 },
    );
  }
}
