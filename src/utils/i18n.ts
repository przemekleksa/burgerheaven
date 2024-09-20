import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend'; // Ładuje tłumaczenia z plików JSON
import LanguageDetector from 'i18next-browser-languagedetector'; // Wykrywa język przeglądarki

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'pl', // Domyślny język
    debug: true,
    interpolation: {
      escapeValue: false, // React sam domyślnie chroni przed XSS
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Ścieżka do plików tłumaczeń
    },
  });

export default i18n;
