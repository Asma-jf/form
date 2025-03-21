import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en/translation.json';
import fa from './fa/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fa: { translation: fa },
    },
    lng: 'fa', 
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n;
