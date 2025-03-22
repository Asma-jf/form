"use client";

import { useSettingsContext } from "@/context/settings/settings-context";
import { useEffect } from "react";
import { ThemeSwitcher } from "@/components/themes/ThemeSwitcher";
import { useLocales } from '@/locales/use-locales';
export default function Home() {
  const { settings, onUpdate } = useSettingsContext();
  const { t, changeLanguage } = useLocales();

  useEffect(() => {
    document.documentElement.setAttribute("dir", settings.themeDirection);
  }, [settings.themeDirection]);

  const handleLanguageChange = (lang: "fa" | "en") => {
    changeLanguage(lang);

    onUpdate('language', lang);
    onUpdate('themeDirection', lang === 'fa' ? 'rtl' : 'ltr');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="container mx-auto p-4">
        <ThemeSwitcher />
        <select
          value={settings.language}
          onChange={(e) => handleLanguageChange(e.target.value as "fa" | "en")}
          className="p-2 border rounded mb-4"
        >
          <option value="fa">فارسی</option>
          <option value="en">English</option>
        </select>

        <h1 className="text-3xl font-bold mb-4">{t('welcome')}</h1>
        <p className="text-lg">{t('description')}</p>
      </div>
    </div>
  );
}
