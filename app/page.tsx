'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  return (
    <main className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 transition-colors px-4 py-12">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 text-center space-y-6 transition-all">
        <button
          onClick={() => setIsDark(!isDark)}
          className="absolute top-4 left-4 text-sm text-gray-500 dark:text-gray-300 hover:underline"
        >
          {isDark ? '☀️ Light mode' : '🌙 Dark mode'}
        </button>

        <img
          src="/droppy-android-512x512.png"
          alt="Droppy Logo"
          className="w-24 h-24 mx-auto rounded-xl shadow-lg"
        />

        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
          Droppy
        </h1>

        <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
          Every drop counts. Minimal donation link pages. <br />
          Support made simple.
        </p>

        <<a
  href="https://droppy.to/your-link"
  className="inline-block bg-droppy-light dark:bg-droppy-dark text-droppy-text font-semibold py-2 px-6 rounded-full shadow-droppy dark:shadow-droppyDark transition-all hover:scale-105"
>
  Create Your ShortLink for Donation
</a>


        <p className="text-xs text-gray-400 dark:text-gray-500 mt-4">
          &copy; {new Date().getFullYear()} Droppy. All rights reserved.
        </p>
      </div>
    </main>
  )
}
