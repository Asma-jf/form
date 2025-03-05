"use client"

import { ThemeSwitcher } from "@/components/themes/ThemeSwitcher"
import { useState, useEffect } from "react"

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    setDarkMode(prefersDark)
    document.documentElement.classList.toggle("dark", prefersDark)
  }, [])

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev
      document.documentElement.classList.toggle("dark", newMode)
      return newMode
    })
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="container mx-auto p-4">
        <button
          onClick={toggleDarkMode}
          className="mb-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
        >
          {darkMode ? "حالت روشن" : "حالت تاریک"}
        </button>
        <h1 className="text-3xl font-bold mb-4">سلام این قرار بود دارک مود باشه اما اجرا نمیشه :)</h1>
        <p className="text-lg">
        همونجور که گفتم قرار بود اجرا بشه ...
        </p>
      </div>
    </div>
  )
}
