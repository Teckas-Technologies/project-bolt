import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white dark:bg-gray-900 shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2">
          <Bell className="w-6 h-6 text-primary-600 dark:text-primary-500" />
          <span className="text-xl font-semibold text-gray-900 dark:text-white">Reminder Agent</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#how-it-works" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-500 transition-colors">
            How It Works
          </a>
          <a href="#benefits" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-500 transition-colors">
            Benefits
          </a>
          <a href="#faq" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-500 transition-colors">
            FAQ
          </a>
          <a href="#waitlist" className="btn btn-primary">
            Join Waitlist
          </a>
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            onClick={toggleMobileMenu} 
            className="text-gray-700 dark:text-gray-300"
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 bg-white dark:bg-gray-900 z-50 pt-20"
        >
          <div className="absolute top-5 right-4">
            <button onClick={toggleMobileMenu} className="p-2" aria-label="Close menu">
              <X size={24} className="text-gray-700 dark:text-gray-300" />
            </button>
          </div>
          <nav className="flex flex-col items-center space-y-8 p-8">
            <a 
              href="#how-it-works" 
              className="text-xl text-gray-800 dark:text-white"
              onClick={toggleMobileMenu}
            >
              How It Works
            </a>
            <a 
              href="#benefits" 
              className="text-xl text-gray-800 dark:text-white"
              onClick={toggleMobileMenu}
            >
              Benefits
            </a>
            <a 
              href="#faq" 
              className="text-xl text-gray-800 dark:text-white"
              onClick={toggleMobileMenu}
            >
              FAQ
            </a>
            <a 
              href="#waitlist" 
              className="btn btn-primary text-xl py-4 px-8 w-full max-w-xs text-center"
              onClick={toggleMobileMenu}
            >
              Join Waitlist
            </a>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;