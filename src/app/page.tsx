"use client"

import { ThemeSwitcher } from "@/components/themes/ThemeSwitcher"
import { useState, useEffect } from "react"

export default function Home() {


  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="container mx-auto p-4">
      <ThemeSwitcher />
        <h1 className="text-3xl font-bold mb-4">سلام این قرار بود دارک مود باشه اما اجرا نمیشه :)</h1>
        <p className="text-lg">
        همونجور که گفتم قرار بود اجرا بشه ...
        </p>
      </div>
    </div>
  )
}
