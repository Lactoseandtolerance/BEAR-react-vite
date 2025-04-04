import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const MainLayout = ({ children }) => {
  const { theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);
  
  // Navigation items
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Primal', path: '/collection/primal' },
    { name: 'Ethereal', path: '/collection/ethereal' },
    { name: 'Techno', path: '/collection/techno' },
    { name: 'About', path: '/about' },
  ];
  
  return (
    <div className="main-layout min-h-screen flex flex-col">
      {/* Header */}
      <header
        style={{
          height: theme?.constants?.headerHeight || '80px',
          backgroundColor: theme?.colors?.background || '#1A1A18',
          borderBottomColor: theme?.colors?.surface || '#2A2A28',
          transition: theme?.transitions?.normal || '0.3s ease-in-out',
        }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 border-b"
      >
        {/* Logo */}
        <Link to="/" className="logo">
          <h1
            style={{
              color: theme?.colors?.primary || '#2D1E0F',
            }}
            className="text-2xl font-black tracking-wider"
          >
            BEAR
          </h1>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex gap-8 list-none m-0 p-0">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  style={{
                    color: location.pathname === item.path 
                      ? (theme?.colors?.accent || '#FF3A00') 
                      : (theme?.colors?.text || '#F5F5F0'),
                    transition: theme?.transitions?.fast || '0.2s ease',
                  }}
                  className={`no-underline ${location.pathname === item.path ? 'font-bold' : 'font-normal'}`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden bg-transparent border-none cursor-pointer p-2"
        >
          <div
            style={{
              backgroundColor: theme?.colors?.text || '#F5F5F0',
              transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
              transition: theme?.transitions?.fast || '0.2s ease',
            }}
            className="w-[30px] h-[2px] my-[6px]"
          />
          <div
            style={{
              backgroundColor: theme?.colors?.text || '#F5F5F0',
              opacity: isMenuOpen ? 0 : 1,
              transition: theme?.transitions?.fast || '0.2s ease',
            }}
            className="w-[30px] h-[2px] my-[6px]"
          />
          <div
            style={{
              backgroundColor: theme?.colors?.text || '#F5F5F0',
              transform: isMenuOpen ? 'rotate(-45deg) translate(7px, -7px)' : 'none',
              transition: theme?.transitions?.fast || '0.2s ease',
            }}
            className="w-[30px] h-[2px] my-[6px]"
          />
        </button>
      </header>
      
      {/* Mobile Navigation Menu */}
      <motion.nav
        initial={{ x: '100%' }}
        animate={{ x: isMenuOpen ? '0%' : '100%' }}
        transition={{ duration: 0.3 }}
        style={{
          backgroundColor: theme?.colors?.background || '#1A1A18',
          top: theme?.constants?.headerHeight || '80px',
        }}
        className="fixed right-0 bottom-0 w-4/5 z-40 p-8 md:hidden"
      >
        <ul className="list-none m-0 p-0 flex flex-col gap-8">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                style={{
                  color: location.pathname === item.path 
                    ? (theme?.colors?.accent || '#FF3A00') 
                    : (theme?.colors?.text || '#F5F5F0'),
                  borderBottomColor: theme?.colors?.surface || '#2A2A28',
                }}
                className={`block text-xl p-4 border-b no-underline ${
                  location.pathname === item.path ? 'font-bold' : 'font-normal'
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </motion.nav>
      
      {/* Main Content */}
      <main 
        style={{
          marginTop: theme?.constants?.headerHeight || '80px',
        }}
        className="flex-1"
      >
        {children}
      </main>
      
      {/* Footer */}
      <footer
        style={{
          backgroundColor: theme?.colors?.background || '#1A1A18',
          color: theme?.colors?.text || '#F5F5F0',
          borderTopColor: theme?.colors?.surface || '#2A2A28',
        }}
        className="py-16 px-8 border-t"
      >
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Brand Column */}
          <div>
            <h2
              style={{
                color: theme?.colors?.primary || '#2D1E0F',
              }}
              className="text-2xl font-black mb-8"
            >
              BEAR
            </h2>
            <p
              style={{
                color: theme?.colors?.textAlt || '#BFB5A3',
              }}
              className="text-sm max-w-[300px] leading-relaxed"
            >
              Bold self-expression woven into every thread. Our clothing is designed for those who live without apology.
            </p>
          </div>
          
          {/* Links Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Collections
            </h3>
            <ul className="list-none m-0 p-0">
              <li className="mb-2">
                <Link 
                  to="/collection/primal" 
                  style={{ color: theme?.colors?.textAlt || '#BFB5A3' }}
                  className="no-underline"
                >
                  Primal Instinct
                </Link>
              </li>
              <li className="mb-2">
                <Link 
                  to="/collection/ethereal" 
                  style={{ color: theme?.colors?.textAlt || '#BFB5A3' }}
                  className="no-underline"
                >
                  Ethereal Dream
                </Link>
              </li>
              <li className="mb-2">
                <Link 
                  to="/collection/techno" 
                  style={{ color: theme?.colors?.textAlt || '#BFB5A3' }}
                  className="no-underline"
                >
                  Techno Future
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Contact
            </h3>
            <address
              style={{
                color: theme?.colors?.textAlt || '#BFB5A3',
              }}
              className="not-italic text-sm leading-relaxed"
            >
              <p>123 Bold Street</p>
              <p>Expression City, BE 12345</p>
              <p>info@bearclothing.com</p>
            </address>
          </div>
        </div>
        
        {/* Copyright */}
        <div
          style={{
            borderTopColor: theme?.colors?.surface || '#2A2A28',
            color: theme?.colors?.textAlt || '#BFB5A3',
          }}
          className="border-t mt-16 pt-8 text-center text-xs"
        >
          &copy; {new Date().getFullYear()} BEAR Clothing. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;