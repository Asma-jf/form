import { useTranslation } from 'react-i18next';
import i18n from './i18n';
import { useSettingsContext } from '@/context/settings/settings-context';
import { useCallback } from 'react';
export const useLocales = () => {
  const { t, i18n: i18 } = useTranslation();
  const { onChangeDirectionByLang } = useSettingsContext();
  const changeLanguage = useCallback((lang: string) => {
    i18n.changeLanguage(lang); 
    onChangeDirectionByLang(lang); 
  }, [onChangeDirectionByLang]);

  return {
    t,
    currentLang: i18.language,
    changeLanguage,
  };
};
