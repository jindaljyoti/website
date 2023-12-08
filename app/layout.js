import './globals.css'

import { Inter } from 'next/font/google'
import Main from "../components/Main/Main"

import { cookies } from 'next/headers'

// @import url("./component.styles.css");
import "./component.styles.css"




export const metadata= {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({children,...props}) {

  const cookieStore = cookies()
  const darkModeSsrValue = cookieStore.get('darkMode').value || false

  return (
    <html lang="en">
      <body>
        <Main darkModeSsrValue={darkModeSsrValue}>
            {children}
        </Main>
      </body>
    </html>
  )
}
