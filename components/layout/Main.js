'use client'
import Theme from "@/components/layout/Theme"
import { useEffect, useState } from 'react'
import { Button } from "@kotapi/rad-ui"


const MainLayout = ({ children }) => {

  const [darkMode, setDarkMode] = useState(  localStorage.getItem('darkMode')==='true'?true:false || false)


  const toggleDarkMode = () => {
    const toggledState = !darkMode
    localStorage.setItem('darkMode', toggledState)
    setDarkMode(toggledState)
    console.log(toggledState,localStorage.getItem('darkMode'))
  }

  const HeartIcon = () => {
    return <svg width="16" height="16" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.35248 4.90532C1.35248 2.94498 2.936 1.35248 4.89346 1.35248C6.25769 1.35248 6.86058 1.92336 7.50002 2.93545C8.13946 1.92336 8.74235 1.35248 10.1066 1.35248C12.064 1.35248 13.6476 2.94498 13.6476 4.90532C13.6476 6.74041 12.6013 8.50508 11.4008 9.96927C10.2636 11.3562 8.92194 12.5508 8.00601 13.3664C7.94645 13.4194 7.88869 13.4709 7.83291 13.5206C7.64324 13.6899 7.3568 13.6899 7.16713 13.5206C7.11135 13.4709 7.05359 13.4194 6.99403 13.3664C6.0781 12.5508 4.73641 11.3562 3.59926 9.96927C2.39872 8.50508 1.35248 6.74041 1.35248 4.90532Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
  }

  return (
    <Theme isDark={darkMode}>
      <div className={`min-h-screen ${darkMode ? 'rad-ui-dark-theme bg-black' : ''}`} data-accent-color="red">
        {/* Navbar start */}
        <div className='px-3 py-2 flex items-center justify-between border-b border-gray-500'>

          <div className='mr-3 flex space-x-8'>
            <a className='text-gray-1000 flex items-center space-x-2 text-md' href="/">
              <HeartIcon/> <span>Rad UI</span>
           </a>
            <ul className='text-sm flex items-center'>
              <li>
                <a className='text-gray-950 hover:text-gray-1000' href="/docs/introduction">Docs</a>
              </li>
            </ul>
          </div>
          <Button color="tomato" variant="outline" onClick={toggleDarkMode}  >Toggle theme</Button>
        </div>
        <main>{children}</main>
      </div>


    </Theme>
  );
}
export default MainLayout;
