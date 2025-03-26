"use client"
import { useState } from "react"
import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import gregorian from "react-date-object/calendars/gregorian"
import persian_fa from "react-date-object/locales/persian_fa"
import english from "react-date-object/locales/gregorian_en"
import { useSettingsContext } from "@/context/settings/settings-context"
import type { DateObject } from "react-multi-date-picker"

export default function Calendar() {
  const { settings } = useSettingsContext()
  const [date, setDate] = useState<DateObject | null>(null)

  const calendarProps = {
    calendar: settings.language === "fa" ? persian : gregorian,
    locale: settings.language === "fa" ? persian_fa : english,
    calendarPosition: "bottom-right",
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="label">
        <span>{settings.language === "fa" ? "تاریخ قرار ملاقات" : "Appointment Date"}</span>
      </div>
      <DatePicker
        className="max-w-md custom-calendar"
        value={date}
        onChange={(newDate: DateObject | null) => setDate(newDate)}
        {...calendarProps}
      />
    </div>
  )
}

