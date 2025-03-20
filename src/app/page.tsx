"use client";

import { useSettingsContext } from "@/context/settings/settings-context";
import { useEffect } from "react";
import { ThemeSwitcher } from "@/components/themes/ThemeSwitcher";

export default function Home() {
  const { settings, onChangeDirectionByLang } = useSettingsContext();

  useEffect(() => {
    document.documentElement.setAttribute("dir", settings.themeDirection);
  }, [settings.themeDirection]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="container mx-auto p-4">
        <ThemeSwitcher />
        <button
          onClick={onChangeDirectionByLang}
          style={{ padding: "10px", margin: "10px", cursor: "pointer" }}
        >
          {settings.themeDirection === "rtl" ? "تغییر به چپ چین" : "تغییر به راست چین"}
        </button>

        <h1 className="text-3xl font-bold mb-4">سلام این قرار بود دارک مود باشه اما اجرا نمیشه :)</h1>
        <p className="text-lg">همونجور که گفتم قرار بود اجرا بشه ...</p>
      </div>
    </div>
  );
}
