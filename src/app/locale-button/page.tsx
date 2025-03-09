"use client";
import { useTranslation } from "react-i18next";
import { Button } from "antd";
import "./styles.css";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const { t, i18n } = useTranslation();
  const route = useRouter();
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };
  const currentLanguage = i18n.language;

  return (
    <div
      style={{
        width: "100%",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>{t("welcome")}</h1>
      <h1>{t("frontendDeveloper")}</h1>

      <Button
        className="button circle"
        onClick={() => changeLanguage(currentLanguage === "en" ? "th" : "en")}
      >
        {currentLanguage === "en" ? t("th") : t("en")}
      </Button>

      <Button
        className="button rounded"
        onClick={() => changeLanguage(currentLanguage === "en" ? "th" : "en")}
      >
        {currentLanguage === "en" ? t("switchToThai") : t("switchToEnglish")}
      </Button>
      <Button
        className="button rectangle"
        onClick={() => changeLanguage(currentLanguage === "en" ? "th" : "en")}
      >
        {currentLanguage === "en" ? t("switchToThai") : t("switchToEnglish")}
      </Button>
      <div style={{ display: "flex" }}>
        <Button
          className="button triangle"
          onClick={() => changeLanguage(currentLanguage === "en" ? "th" : "en")}
        >
          {currentLanguage === "en" ? t("th") : t("en")}
        </Button>
      </div>
      <div style={{ display: "flex" }}>
        <Button
          className="button hexagon"
          onClick={() => changeLanguage(currentLanguage === "en" ? "th" : "en")}
        >
          {currentLanguage === "en" ? t("switchToThai") : t("switchToEnglish")}
        </Button>
      </div>

      <Button
        type="link"
        style={{ marginTop: "20px" }}
        onClick={() => route.push("/table-user")}
      >
        {t("goToTableUser") + " >>>"}
      </Button>
    </div>
  );
}
