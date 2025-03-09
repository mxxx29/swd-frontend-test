import i18next from "i18next";
import { initReactI18next } from "react-i18next";

const i18n = i18next.createInstance();

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  lng: "en",
  resources: {
    en: {
      translation: {
        welcome: "Welcome to Next.js!",
      },
    },
    th: {
      translation: {
        welcome: "ยินดีต้อนรับสู่ Next.js!",
      },
    },
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
