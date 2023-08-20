"use client"

import { useEffect, useState } from "react"
import { Button } from "./ui/button"
import { MoonStar, Sun } from 'lucide-react';
 

function DarkModeSwitcher() {

  const [darkMode, setDarkMode] = useState(false)

  function toggleDarkMode() {
    setDarkMode(!darkMode)
    if (darkMode) {
      localStorage.setItem('darkMode', 'false')
      document.body.classList.remove('dark')
    } else {
      localStorage.setItem('darkMode', 'true')
      document.body.classList.add('dark')
    }
  }

  useEffect(() => {
    const darkMode = localStorage.getItem('darkMode')
    if (darkMode === 'true') {
      setDarkMode(true)
      document.body.classList.add('dark')
    } else {
      setDarkMode(false)
      document.body.classList.remove('dark')
    }
  }, [])

  return (
    <Button variant="ghost" size="icon" onClick={toggleDarkMode}
    className="dark:hover:bg-gray-700">
      {darkMode ? (
        <MoonStar />
      ) : (
        <Sun />
          )}
    </Button>
  )
}

export default DarkModeSwitcher
export { DarkModeSwitcher }
