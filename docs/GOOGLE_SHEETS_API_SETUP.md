# Google Sheets API + Next.js Integration Plan

## Overview

Use Google Sheets as your database and expose it via a Next.js API route that returns data in the same structure as `mockedData` (MenuItem[]).

---

## Part 1: Google Cloud Console Setup

### Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click the project dropdown → **New Project**
3. Name it (e.g. `estacion-alemania`) → **Create**

### Step 2: Enable Google Sheets API

1. In the project, go to **APIs & Services** → **Library**
2. Search for **Google Sheets API** → **Enable**
3. Search for **Google Drive API** → **Enable** (required for sheet access)

### Step 3: Create Credentials

**Option A: Service Account (recommended for private sheets)**

1. Go to **APIs & Services** → **Credentials**
2. **Create Credentials** → **Service Account**
3. Name it (e.g. `sheets-reader`) → **Create and Continue**
4. Skip optional steps → **Done**
5. Click the new service account → **Keys** tab
6. **Add Key** → **Create new key** → **JSON** → **Create**
7. Save the JSON file securely (e.g. `google-credentials.json`)
8. Copy the **service account email** (e.g. `sheets-reader@project-id.iam.gserviceaccount.com`)

**Option B: API Key (simple, for published/public sheets only)**

1. **Create Credentials** → **API Key**
2. Copy the key
3. (Optional) Restrict key to Sheets API under **API restrictions**

---

## Part 2: Google Sheet Setup

### Sheet Structure

Create a sheet with columns matching `MenuItem`. Row 1 = headers.

| A (id) | B (nombre) | C (categoria) | D (descripcion) | E (description) | F (precio) | G (vegetariano) | H (sinTacc) | I (onOff) |
|--------|------------|---------------|-----------------|-----------------|------------|-----------------|-------------|-----------|
| 1 | Ristretto | CAFETERIA | | | 3500 | false | false | true |
| 2 | Cafe corto | CAFETERIA | | | 3500 | false | false | false |

- **id**: number or empty (will be null)
- **nombre**: string
- **categoria**: CAFETERIA | BEBIDA | REGIONAL | CARNES | GUARNICION | PASTAS | POSTRE
- **descripcion**, **description**: strings (Spanish/English)
- **precio**: number or empty (null)
- **vegetariano**, **sinTacc**, **onOff**: `true` / `false` or empty (null for onOff)

### Sharing (Service Account)

1. Open your Google Sheet
2. **Share** → Add the service account email (from Step 3 Option A)
3. Give **Viewer** access

---

## Part 3: Next.js Environment & Package

### Step 4: Environment Variables

Create `.env.local` (add to `.gitignore` if not already):

```env
GOOGLE_SHEET_ID=your_sheet_id_from_url
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
```

Optional: if the default range `A5:I1000` fails (e.g. "Unable to parse range"), set the sheet tab name explicitly:

```env
GOOGLE_SHEET_RANGE=Hoja 1!A5:I1000
```

(Use your tab name: "Hoja 1" for Spanish, "Sheet1" for English, or your custom name.)

- **GOOGLE_SHEET_ID**: From the sheet URL `https://docs.google.com/spreadsheets/d/{SHEET_ID}/edit`
- For Service Account: put the `client_email` and `private_key` from the JSON file (keep the `\n` in the key)

**If using API Key instead:**

```env
GOOGLE_SHEET_ID=your_sheet_id
GOOGLE_API_KEY=your_api_key
```

### Step 5: Install Google APIs Client

```bash
pnpm add googleapis
```

---

## Part 4: Next.js API Route

### Step 6: API Route Implementation

Create `app/api/menu/route.ts` that:

1. Uses `googleapis` with your credentials
2. Reads the sheet range (e.g. `Sheet1!A2:I1000`)
3. Maps rows to `MenuItem[]` (parse numbers, booleans, handle empty → null)
4. Returns JSON with the same shape as `mockedData`

---

## Part 5: API Route Details

The route at `app/api/menu/route.ts`:

- Supports **Service Account** (`GOOGLE_SERVICE_ACCOUNT_EMAIL` + `GOOGLE_PRIVATE_KEY`)
- Supports **API Key** (`GOOGLE_API_KEY`) for public sheets
- Reads range `Sheet1!A2:I1000` (adjust if your sheet name/range differs)
- Maps rows to `MenuItem[]` and returns JSON

## Part 6: Frontend Integration

### Step 7: Consume the API

Replace the `mockedData` import in `app/[locale]/menu/page.tsx` with a fetch to `/api/menu`, or use SWR/React Query for caching and revalidation.

---

## Summary Checklist

- [ ] Create Google Cloud project
- [ ] Enable Sheets API + Drive API
- [ ] Create Service Account (or API Key)
- [ ] Download JSON / copy credentials
- [ ] Create Google Sheet with correct columns
- [ ] Share sheet with service account email (if using Service Account)
- [ ] Add env vars to `.env.local`
- [ ] Install `googleapis`
- [ ] Create `app/api/menu/route.ts`
- [ ] Update menu page to fetch from `/api/menu`
