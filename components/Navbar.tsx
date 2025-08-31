'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import clsx from 'clsx'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 80, damping: 15 }}
      className={clsx(
        'fixed inset-x-0 top-0 z-50 mx-auto w-full transition-all',
        scrolled
          ? 'bg-black/50 backdrop-blur border-b border-white/10'
          : 'bg-transparent'
      )}
    >
      <div className="container flex items-center justify-between py-3">
        {/* Logo */}
        <Link href="#home" className="text-lg font-semibold">
          Pandit
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="#about" className="hover:text-brand-300">
            About
          </Link>
          <Link href="#projects" className="hover:text-brand-300">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-brand-300">
            Contact
          </Link>
          <a
            href="/resume/Dharmendra_Pandit_Resume.pdf"
            download
            className="btn"
          >
            Download Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-black/80 backdrop-blur border-t border-white/10"
        >
          <div className="flex flex-col items-center gap-6 py-6">
            <Link
              href="#about"
              className="hover:text-brand-300"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="#experience"
              className="hover:text-brand-300"
              onClick={() => setIsOpen(false)}
            >
              Experience
            </Link>

            <Link
              href="#skills"
              className="hover:text-brand-300"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </Link>

            <Link
              href="#projects"
              className="hover:text-brand-300"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>

            <Link
              href="#contact"
              className="hover:text-brand-300"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <a
              href="/resume/Resume.pdf"
              download
              className="btn"
              onClick={() => setIsOpen(false)}
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
