import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo & Copyright */}
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <Bell className="w-6 h-6 text-primary-600 dark:text-primary-500" />
              <span className="text-xl font-semibold text-gray-900 dark:text-white">Reminder Agent</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center justify-center md:justify-start">
              Made with <Heart className="w-4 h-4 mx-1 text-error-500" /> in India
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">
              © {currentYear} Reminder Agent. All rights reserved.
            </p>
          </div>
          
          {/* Links & Social */}
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-6">
              <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-500 transition-colors">
                Privacy
              </a>
              <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-500 transition-colors">
                Terms
              </a>
              <a href="#waitlist" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-500 transition-colors">
                Join Waitlist
              </a>
            </div>
            
            <div className="flex gap-4">
              <motion.a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <Linkedin size={20} />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;