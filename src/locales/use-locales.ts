import { useTranslation } from 'react-i18next';
import i18n from './i18n';

export const useLocales = () => {
  const { t, i18n: i18 } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    if (lang === 'fa') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
  };

  return {
    t,
    currentLang: i18.language,
    changeLanguage,
  };
};
