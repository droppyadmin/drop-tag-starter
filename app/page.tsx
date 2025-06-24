'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Home() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 px-6 py-10 flex items-center justify-center transition-colors">
      <div className="w-full max-w-sm grid gap-6 text-center">
        <button
          onClick={() => setIsDark(!isDark)}
          className="justify-self-end text-sm text-gray-500 dark:text-gray-300 hover:underline"
        >
          {isDark ? '☀️ Light mode' : '🌙 Dark mode'}
        </button>

        <motion.img
          src="/droppy-android-512x512.png"
          alt="Droppy Logo"
          width={120}
          height={120}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="justify-self-center mx-auto rounded-3xl shadow-xl"
        />

        <motion.h1
          className="text-4xl font-extrabold text-gray-800 dark:text-white tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Droppy
        </motion.h1>

        <motion.p
          className="text-lg text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Every drop counts. Minimal donation link pages. Support made simple.
        </motion.p>

        <motion.a
          href="https://droppy.to/your-link"
          className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          Create Your DropTag
        </motion.a>

        <motion.div
          className="text-sm text-gray-400 dark:text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          &copy; {new Date().getFullYear()} Droppy. All rights reserved.
        </motion.div>
      </div>
    </main>
  )
}
