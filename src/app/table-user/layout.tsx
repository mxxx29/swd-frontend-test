"use client";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../../config/i18n";
import { Provider } from "react-redux";
import { store } from "@/store";
import { Layout as LayoutAnt, Button } from "antd";

const { Header, Content } = LayoutAnt;

export default function Layout({ children }: { children: React.ReactNode }) {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (!i18n.language) {
      i18n.changeLanguage("en");
    }
  }, [i18n]);

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };
  return (
    <Provider store={store}>
      <html lang={i18n.language || "en"}>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <div style={{ float: "right" }}>
            <Button
              onClick={() => handleLanguageChange("en")}
              style={{ marginRight: 10 }}
            >
              EN
            </Button>
            <Button onClick={() => handleLanguageChange("th")}>TH</Button>
          </div>
        </Header>
        <LayoutAnt
          style={{
            padding: "0 50px",
            marginTop: 64,
            height: "calc(100vh - 64px)",
          }}
        >
          <Content
            style={{
              padding: "24px 0",
              height: "100%",
              overflow: "auto",
            }}
          >
            {children}
          </Content>
        </LayoutAnt>
      </html>
    </Provider>
  );
}
