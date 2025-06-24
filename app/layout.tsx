import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Droppy — Every Drop Counts',
  description: 'Minimal donation link pages. Support made simple.',
  icons: {
    icon: [
      { url: '/droppy-favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/droppy-favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/droppy-favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/droppy-favicon.ico', type: 'image/x-icon' },
    ],
    apple: [
      { url: '/droppy-apple-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'icon', url: '/droppy-icon-192x192.png' },
      { rel: 'icon', url: '/droppy-icon-512x512.png' },
      { rel: 'msapplication-TileImage', url: '/droppy-mstile-150x150.png' },
      { rel: 'icon', url: '/droppy-mstile-310x310.png' },
      { rel: 'apple-touch-icon', url: '/droppy-webclip-128x128.png' },
    ]
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
