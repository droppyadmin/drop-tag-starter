'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-12 bg-white dark:bg-gray-900 text-center transition-colors">
      <button
        onClick={() => setIsDark(!isDark)}
        className="absolute top-4 left-4 text-sm text-gray-500 dark:text-gray-300 hover:underline"
      >
        {isDark ? '☀️ Light mode' : '🌙 Dark mode'}
      </button>

      <img
        src="/droppy-android-512x512.png"
        alt="Droppy Logo"
        width={120}
        height={120}
        className="mb-6 rounded-2xl shadow-xl"
      />

      <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-4 tracking-tight">
        Droppy
      </h1>

      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-md mb-6 leading-relaxed">
        Every drop counts. Minimal donation link pages. Support made simple.
      </p>

      <a
        href="https://droppy.to/your-link"
        className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-colors"
      >
        Create Your DropTag
      </a>

      <footer className="mt-10 text-sm text-gray-400 dark:text-gray-500">
        &copy; {new Date().getFullYear()} Droppy. All rights reserved.
      </footer>
    </main>
  )
}
