"use client";
import { SettingsValueProps } from "@/context/settings/types";
import { SettingsContext } from './settings-context';
import React, { useMemo, useCallback } from "react";
import { useLocalStorage } from "@/hooks/use-local-storage";

type SettingsProviderProps = {
    children: React.ReactNode;
    defaultSettings: SettingsValueProps;
};

export function SettingsProvider({ children, defaultSettings }: SettingsProviderProps) {
    const [settings, setSettings] = useLocalStorage<SettingsValueProps>("app-settings", defaultSettings);

    const onUpdate = useCallback((name: string, value: string | boolean) => {
        setSettings((prevSettings) => ({
            ...prevSettings,
            [name]: value,
        }));
    }, [setSettings]);  

    const memoizedValue = useMemo(
        () => ({
            settings,
            onUpdate,  
        }),
        [settings, onUpdate]  
    );

    return <SettingsContext.Provider value={memoizedValue}>{children}</SettingsContext.Provider>;
}
