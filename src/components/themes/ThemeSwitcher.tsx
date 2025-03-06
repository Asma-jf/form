"use client";

import { useSettingsContext } from "@/context/settings/settings-context";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { settings, onUpdate } = useSettingsContext();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleThemeChange = (newTheme: 'light' | 'dark') => {
    onUpdate('theme', newTheme); 
    setTheme(newTheme);        
  };

  return (
    <div>
      The current theme is: {settings.theme}
      <button onClick={() => handleThemeChange('light')}>Light Mode</button>
      <button onClick={() => handleThemeChange('dark')}>Dark Mode</button>
    </div>
  );
};
