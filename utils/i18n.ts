import enTranslations from "../locales/en.json";
import hiTranslations from "../locales/hi.json";

type Translations = {
  en: typeof enTranslations;
  hi: typeof hiTranslations;
};

const translations: Translations = {
  en: enTranslations,
  hi: hiTranslations,
};

export const getTranslations = (lang: string) => {
  return translations[lang as keyof Translations] || translations["en"]; 
};