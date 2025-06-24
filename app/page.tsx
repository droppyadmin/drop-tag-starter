'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Home() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-gray-900 px-6 py-16 transition-colors space-y-6">
      <button
        onClick={() => setIsDark(!isDark)}
        className="absolute top-4 right-4 text-sm text-gray-500 dark:text-gray-300 hover:underline"
      >
        {isDark ? '☀️ Light mode' : '🌙 Dark mode'}
      </button>

      <motion.img
        src="/droppy-android-512x512.png"
        alt="Droppy Logo"
        width={120}
        height={120}
        className="mb-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      />

      <motion.h1
        className="text-4xl font-bold text-gray-800 dark:text-white tracking-tight"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Droppy
      </motion.h1>

      <motion.p
        className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        Every drop counts. Minimal donation link pages. Support made simple.
      </motion.p>

      <motion.a
        href="https://droppy.to/your-link"
        className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-6 rounded-2xl transition-colors"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.4 }}
      >
        Create Your ShortLink for any Wallet
      </motion.a>

      <motion.div
        className="mt-12 text-sm text-gray-400 dark:text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        &copy; {new Date().getFullYear()} Droppy. All rights reserved.
      </motion.div>
    </main>
  )
}
