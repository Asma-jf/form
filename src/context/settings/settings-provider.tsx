"use client";
import React, { useMemo, useCallback } from "react";
import { SettingsValueProps } from "@/context/settings/types";
import { SettingsContext } from './settings-context';
import { useLocalStorage } from "@/hooks/use-local-storage";

type SettingsProviderProps = {
    children: React.ReactNode;
    defaultSettings: SettingsValueProps;
};

export function SettingsProvider({ children, defaultSettings }: SettingsProviderProps) {
    const [settings, setSettings] = useLocalStorage<SettingsValueProps>("app-settings", defaultSettings);

    const onUpdate = useCallback(<T extends keyof SettingsValueProps>(name: T, value: SettingsValueProps[T]) => {
        setSettings((prevSettings: SettingsValueProps) => ({
            ...prevSettings,
            [name]: value,
        }));
    }, [setSettings]);

    const onChangeDirectionByLang = useCallback((newLang: "fa" | "en") => {
        setSettings((prevSettings: SettingsValueProps) => ({
            ...prevSettings,
            language: newLang,
            themeDirection: newLang === "fa" ? "rtl" : "ltr",
        }));
    }, [setSettings]);

    const memoizedValue = useMemo(() => ({
        settings,
        onUpdate,
        onChangeDirectionByLang
    }), [settings, onUpdate]);

    return <SettingsContext.Provider value={memoizedValue}>{children}</SettingsContext.Provider>;
}
