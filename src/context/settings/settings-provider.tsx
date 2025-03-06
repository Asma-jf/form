"use client";
import { SettingsValueProps } from "@/context/settings/types";
import { SettingsContext } from './settings-context';
import React, { useMemo } from "react";
import { useLocalStorage } from "@/hooks/use-local-storage";

type SettingsProviderProps = {
    children: React.ReactNode;
    defaultSettings: SettingsValueProps;
};

const onUpdate = (setSettings: React.Dispatch<React.SetStateAction<SettingsValueProps>>) => (name: string, value: string | boolean) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: value, 
    }));
  };
  export function SettingsProvider({ children, defaultSettings }: SettingsProviderProps) {
    const [settings, setSettings] = useLocalStorage<SettingsValueProps>("app-settings", defaultSettings);
    const memoizedValue = useMemo(
      () => ({
        settings,
        onUpdate: onUpdate(setSettings), 
      }),
      [settings] 
    );
  
    return <SettingsContext.Provider value={memoizedValue}>{children}</SettingsContext.Provider>;
  }