
'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from "@/components/Contact"
import Footer from '@/components/Footer'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-blue-600 rounded-full animate-spin border-t-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-blue-500 font-bold text-xl">H</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gray-900">
      <Header />
      <Hero />
      <div className="px-20 py-3 gap-3">

        <About />
        <Skills />
        <Projects />
        {/* <Contact /> */}
      </div>
      <Footer />
    </main>
  )
}





