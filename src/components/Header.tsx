// components/Header.tsx
'use client'

import { useState, useEffect } from 'react'
import { Download, Menu, X } from 'lucide-react'
import Link from 'next/link'

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#skills', label: 'Skills' },
        { href: '#projects', label: 'Projects' },
        { href: '#contact', label: 'Contact' },
    ]
    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 animate-slide-up ${isScrolled || isMobileMenuOpen ? 'backdrop-blur-xl shadow-lg' : 'bg-transparent'
                }`}
        >
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="text-2xl font-bold gradient-text animate-fade-in">
                        Himanshu
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-gray-300 hover:text-blue-400 transition-colors duration-200 hover:scale-105 transform"
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Link href={'/HimanshuRaj.pdf'} target="_blank" className="text-gray-300 hover:text-amber-700 transition-colors duration-200 hover:scale-105 transform flex flex-row border rounded-sm py-1 px-4 bg-amber-700 hover:bg-white">
                            <Download /> Resume
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white cursor-pointer"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="md:hidden glass-effect mt-2 rounded-lg animate-fade-in">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="block px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}

                            <Link href={'/HimanshuRaj.pdf'} target="_blank" className="text-gray-300 hover:text-amber-700 transition-colors duration-200 hover:scale-105 transform flex w-fit flex-row border rounded-sm py-1 px-4 bg-amber-700 hover:bg-white">
                                <Download /> Resume
                            </Link>

                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}

export default Header
