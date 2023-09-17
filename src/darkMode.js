import React, { useState, useEffect }from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'; 
const DarkMode = () => {
    const [theme, setTheme] = useState(null);

  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  }, [])

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div>
       <button className="bg-green-200 p-4 rounded-3xl" onClick={handleThemeSwitch}>
       {theme === 'dark' ? <FaMoon /> :  <FaSun />}      </button>
    </div>
  )
}

export default DarkMode
