'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Home() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-gray-900 px-6 py-12 transition-colors">
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
        className="mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      />

      <motion.h1
        className="text-4xl font-bold text-gray-800 dark:text-white mb-4 tracking-tight"
        custom={0}
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        Droppy
      </motion.h1>

      <motion.p
        className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 text-center max-w-md mb-8"
        custom={1}
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        Every drop counts.<br />
        Minimal donation link pages.<br />
        Support made simple.
      </motion.p>

      <motion.a
        href="https://droppy.to/your-link"
        className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-6 rounded-2xl transition-colors"
        custom={2}
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        Create Your DropTag
      </motion.a>

      <motion.div
        className="mt-10 text-sm text-gray-400 dark:text-gray-500"
        custom={3}
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        &copy; {new Date().getFullYear()} Droppy. All rights reserved.
      </motion.div>
    </main>
  )
}
