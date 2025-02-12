'use client'

import { useState, useEffect } from "react";
import Button from "./Button";
import Link from "next/link";
import { OptimizedImage } from './ui/optimized-image';

const navLinks = [
    { href: '/chi-siamo', text: 'Chi Siamo' },
    { href: '/cessione-quinto', text: 'Cessione del quinto' },
    { href: '/prestiti-convenzione', text: 'Prestiti in convenzione' },
    { href: '/prestiti-delega', text: 'Prestiti delega' },
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 mx-auto w-full z-50 transition-all duration-300 ${
                scrolled ? 'mt-0' : 'mt-safe sm:mt-4 md:mt-6'
            }`}
            role="navigation"
            aria-label="Main navigation"
        >
            <div className="flex justify-center align-center items-center h-20 sm:h-20 md:h-20 px-4 sm:px-4 md:px-10">
                {/* Desktop Combined Container */}
                <div className={`hidden md:flex items-center text-black gap-2 bg-white/80 backdrop-blur-xl rounded-full px-2 py-3 transition-all duration-300 ${
                    scrolled ? 'shadow-lg' : 'shadow-md'
                }`}>
                    {/* Logo */}
                    <Link href="/" className="flex items-center text-black px-4 transition-transform duration-300 hover:scale-105" aria-label="Homepage">
                        <OptimizedImage src="/full-logo.png" alt="Cessione Subito Logo" width={132} height={132} className="w-36" />
                    </Link>

                    {/* Navigation Links */}
                    <nav aria-label="Desktop navigation" className="flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <Link 
                                key={link.href}
                                className="px-4 py-2 rounded-full text-[#003B7E]/80 transition-all duration-200
                                         hover:bg-white/60 hover:shadow-[inset_0_2px_6px_rgba(0,0,0,0.08)]
                                         active:bg-white/70 active:shadow-[inset_0_3px_7px_rgba(0,0,0,0.15)]
                                         hover:text-[#003B7E] text-base font-medium relative group focus:outline-none focus:ring-2 focus:ring-[#003B7E] focus:ring-offset-2" 
                                href={link.href}
                            >
                                {link.text}
                                <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-[#40BFEF] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" 
                                      aria-hidden="true" />
                            </Link>
                        ))}
                    </nav>
                    <div className="pl-2">
                        <Link href="/contatti">
                            <Button text="Contattaci" />
                        </Link>
                    </div>
                </div>

                {/* Mobile Container */}
                <div className={`md:hidden flex items-center justify-between text-black bg-white/80 backdrop-blur-xl rounded-full w-full transition-all duration-300 ${
                    scrolled ? 'shadow-lg' : 'shadow-md'
                }`}>
                    <div className="w-14 opacity-0" aria-hidden="true">
                        <svg className="w-7 h-7" viewBox="0 0 24 24" />
                    </div>

                    <Link href="/" className="flex items-center justify-center px-4 py-3.5" aria-label="Homepage">
                        <OptimizedImage src="/full-logo.png" alt="Cessione Subito Logo" width={132} height={132} className="w-32" />
                    </Link>

                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="px-3.5 py-3.5 transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#003B7E] focus:ring-offset-2"
                        aria-label={isMenuOpen ? "Chiudi menu" : "Apri menu"}
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-menu"
                    >
                        <svg className="w-7 h-7 text-[#003B7E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div 
                        id="mobile-menu"
                        className="fixed top-0 left-0 right-0 bottom-0 bg-white/95 backdrop-blur-xl shadow-lg md:hidden transform-gpu transition-all duration-300 animate-slideDown"
                        role="menu"
                        aria-label="Mobile navigation"
                    >
                        <div className="flex justify-end p-4">
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                                aria-label="Chiudi menu"
                            >
                                <svg className="w-6 h-6 text-[#003B7E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <nav className="flex flex-col gap-2 px-4 pt-2 pb-6 h-[calc(100vh-80px)] overflow-y-auto">
                            {navLinks.map((link) => (
                                <Link 
                                    key={link.href}
                                    className="px-4 py-3 rounded-xl text-[#003B7E]/90 text-lg font-medium
                                             hover:bg-gray-100 active:bg-gray-200 transition-colors"
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    role="menuitem"
                                >
                                    {link.text}
                                </Link>
                            ))}
                            <div className="mt-4">
                                <Link href="/contatti" role="menuitem">
                                    <Button 
                                        text="Contattaci"
                                        className="w-full text-lg py-6 bg-[#003B7E] text-white hover:bg-[#003B7E]/90"
                                    />
                                </Link>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </nav>
    );
}