import React from 'react'
import './styles.css'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  description: 'Pliki na przedmiotach zawodowych CEZ.',
  title: 'Pliki CEZ',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="pl" className={`${inter.className} dark`}>
      <body>
        <main className="p-12">{children}</main>
      </body>
    </html>
  )
}
