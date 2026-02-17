import Image from "next/image";
import { Locale } from "@/constants/locales";

export default function SectionTitle({
  title,
  locale = "es",
}: {
  title: string;
  locale?: Locale;
}) {
  const sinTaccLabel = locale === "en" ? "No TACC" : "Sin TACC";
  const vegetarianoLabel = locale === "en" ? "Vegetarian" : "Vegetariano";

  return (
    <>
      <h2 className="text-center text-gris font-alumni text-3xl">{title}</h2>
      <div className="flex flex-row justify-center gap-20 mx-auto mt-2 mb-5">
        <div className="flex flex-row gap-1">
          <span className="relative w-5 h-5 drop-shadow-card text-xl text-gris">
            <Image
              src={`/icons/vegetarianoOscuro.svg`}
              alt={vegetarianoLabel}
              fill
            />
          </span>
          {sinTaccLabel}
        </div>
        <div className="flex flex-row gap-1">
          <span className="relative w-5 h-5 drop-shadow-card text-xl text-gris">
            <Image
              src={`/icons/sinTaccOscuro.svg`}
              alt={sinTaccLabel}
              fill
            />
          </span>
          {vegetarianoLabel}
        </div>
      </div>
    </>
  );
}
