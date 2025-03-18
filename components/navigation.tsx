'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Navigation links
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/volunteer", label: "Volunteer" },
    { href: "/donate", label: "Donate" },
    { href: "/contact", label: "Contact" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-gray-900/95 backdrop-blur-sm shadow-lg" : "bg-gray-900"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              Akasha Paravakal
            </span>
          </Link>
          
          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm rounded-lg lg:hidden text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
          
          {/* Desktop & Mobile menu */}
          <div className={`${isOpen ? 'block' : 'hidden'} w-full lg:block lg:w-auto`}>
            <ul className="flex flex-col mt-4 rounded-lg lg:flex-row lg:space-x-8 lg:mt-0 lg:text-sm lg:font-medium">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block py-2 px-3 rounded ${
                      pathname === link.href
                        ? "bg-blue-600 text-white lg:bg-transparent lg:text-blue-400"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white lg:hover:bg-transparent lg:hover:text-blue-400"
                    } lg:p-0`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
