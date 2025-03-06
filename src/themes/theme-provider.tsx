// app/providers.tsx
"use client";

import { useSettingsContext } from '@/context/settings/settings-context';
import { HeroUIProvider } from '@heroui/react'
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  const { settings } = useSettingsContext();
  return (
    <HeroUIProvider>
      <NextThemesProvider attribute="class"
        defaultTheme={settings.theme}
        enableSystem={true}>
        {children}
      </NextThemesProvider>
    </HeroUIProvider>
  )
}