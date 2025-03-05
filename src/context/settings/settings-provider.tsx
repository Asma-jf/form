import { SettingsValueProps } from "@/context/settings/types";
import { SettingsContext } from './settings-context';
import React, { useMemo } from "react";

type SettingsProviderProps = {
    children: React.ReactNode;
    defaultSettings: SettingsValueProps;
};

export function SettingsProvider({ children, defaultSettings }: SettingsProviderProps) {

    const memoizedValue = useMemo(
        () => ({
s
        }),
        []
    );

    return <SettingsContext.Provider value={memoizedValue}>{children}</SettingsContext.Provider>;
}