"use client";
import React from "react";
import { I18nProvider } from "@react-aria/i18n";
import { parseAbsoluteToLocal } from "@internationalized/date";

interface I18nWrapperProps {
  children: React.ReactNode;
  language?: string; 
}
const defaultSettings = {
  language: 'fa',
};
export default function i18nprovider({ children, language }: I18nWrapperProps) {
  const [date, setDate] = React.useState(parseAbsoluteToLocal("2021-04-07T18:45:22Z"));

  const locale = (language) === "fa" ? "fa-IR" : "en-US";
  return (
    <div className="flex flex-col gap-4">
      <I18nProvider locale={locale}>
        {children}
      </I18nProvider>
    </div>
  );
}