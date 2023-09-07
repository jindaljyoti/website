'use client'

import { useState } from 'react'


const MainLayout = ({ children }) => {

  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

    return (
        <>
        <div className={`min-h-screen ${darkMode?'rad-ui-dark-theme bg-black':''}`}>
          <button onClick={toggleDarkMode} className='text-gray-900'>Toggle Dark Mode</button>
          <main>{children}</main>
        </div>
       

        </>
    );
    }
    export default MainLayout;
