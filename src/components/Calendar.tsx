"use client"
import React, { useState } from "react";
import DatePicker from "react-multi-date-picker";
import { DateObject } from "react-multi-date-picker"; 

export default function Calendar() {
  const [date, setDate] = useState<DateObject | null>(null);

  return (
    <div className="flex flex-col gap-4">
      <div className="label">
        <span>Appointment Date</span> 
      </div>
      <DatePicker
        className="max-w-md"
        value={date}
        onChange={(newDate: DateObject | null) => setDate(newDate)} 
      />
    </div>
  );
}
