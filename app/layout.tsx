import './globals.css'
import type { Metadata } from 'next'
import { Antonio, Inter } from 'next/font/google'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const antonio = Antonio({
  subsets: ["latin"],
  variable: "--font-antonio",
});

export const metadata: Metadata = {
  title: '☀︎',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${antonio.variable}`}>{children}</body>
    </html>
  )
}