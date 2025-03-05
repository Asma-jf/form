import { SettingsValueProps } from "@/context/settings/types";
import { SettingsContext } from "./settings-context";
import React, { useMemo, useState } from "react";
import { ThemeProvider } from "next-themes";  // Import ThemeProvider from next-themes

type SettingsProviderProps = {
  children: React.ReactNode;
  defaultSettings: SettingsValueProps;  
};

export function SettingsProvider({
  children,
  defaultSettings,
}: SettingsProviderProps) {
  const [settings, setSettings] = useState<SettingsValueProps>(defaultSettings);

  const memoizedValue= useMemo(
    () => ({
      settings,        
      setSettings,   
    }),
    [settings]        
  );

  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <SettingsContext.Provider value={memoizedValue}>
        {children}
      </SettingsContext.Provider>
    </ThemeProvider>
  );
}
