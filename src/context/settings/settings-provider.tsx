import { SettingsValueProps } from "@/context/settings/types";
import { SettingsContext } from "./settings-context";
import React, { useMemo } from "react";
import { ThemeProvider } from "next-themes";

type SettingsProviderProps = {
  children: React.ReactNode;
  defaultSettings: SettingsValueProps;
};

export function SettingsProvider({ children, defaultSettings }: SettingsProviderProps) {
  const memoizedValue = useMemo(
    () => ({
      ...defaultSettings,
    }),
    [defaultSettings]
  );

  return (
    <SettingsContext.Provider value={memoizedValue}>
      <ThemeProvider attribute="class">{children}</ThemeProvider>
    </SettingsContext.Provider>
  );
}
