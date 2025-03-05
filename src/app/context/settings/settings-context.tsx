"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

interface SettingsContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // مقدار اولیه برای theme
  const [theme, setTheme] = useState<Theme>('light');

  // استفاده از useEffect برای بارگذاری theme از localStorage فقط در مرورگر
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    setTheme(savedTheme || 'light');
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    // ذخیره theme در localStorage در هر بار تغییر
    if (theme) {
      localStorage.setItem('theme', theme);
      // افزودن یا حذف کلاس dark از تگ html برای تغییر استایل‌ها
      document.documentElement.classList.toggle('dark', theme === 'dark');
    }
  }, [theme]);

  return (
    <SettingsContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};
