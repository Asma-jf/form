import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en/translation.json';
import fa from './fa/translation.json';
import { localStorageGetItem } from '@/utils/storage-available';

const defaultLang = localStorageGetItem('settings', { language: 'fa' }).language;

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fa: { translation: fa },
    },
    lng: defaultLang,
    interpolation: { escapeValue: false },
  });

export default i18n;
