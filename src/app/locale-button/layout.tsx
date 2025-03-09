"use client";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../../config/i18n";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (!i18n.language) {
      i18n.changeLanguage("en");
    }
  }, [i18n]);

  return (
    <html lang={i18n.language || "en"}>
      <body>{children}</body>
    </html>
  );
}
