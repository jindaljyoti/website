import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Main from "@/components/layout/Main"

// @import url("./component.styles.css");
import "./component.styles.css"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Main>
            {children}
        </Main>
      </body>
    </html>
  )
}
