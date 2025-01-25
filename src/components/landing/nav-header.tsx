'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function NavHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-300 rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-white">C</span>
            </div>
            <span className={`text-2xl font-bold ${scrolled ? 'text-gray-900' : 'text-white'}`}>
              Contrease
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <NavLinks scrolled={scrolled} />
            <button className="bg-gradient-to-r from-blue-600 to-cyan-300 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
              Start Free
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Menu</span>
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4"
          >
            <NavLinks scrolled={scrolled} />
            <button className="bg-gradient-to-r from-blue-600 to-cyan-300 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
              Start Free
            </button>
          </motion.div>
        )}
      </nav>
    </header>
  )
}

function NavLinks({ scrolled }: { scrolled: boolean }) {
  const links = ['Features', 'Solutions', 'Pricing', 'About']
  return (
    <>
      {links.map((link) => (
        <Link
          key={link}
          href={`#${link.toLowerCase()}`}
          className={`font-medium hover:text-cyan-600 transition-colors ${
            scrolled ? 'text-gray-800' : 'text-white'
          }`}
        >
          {link}
        </Link>
      ))}
    </>
  )
}
