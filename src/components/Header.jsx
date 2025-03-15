import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Users, Calendar, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="bg-white shadow-md fixed w-full z-50"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link to="/" className="flex items-center space-x-2">
          <Users className="h-8 w-8 text-blue-600" />
          <span className="text-2xl font-bold text-blue-600">CommunionHub</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex items-center space-x-8">
          <Link
            to="/"
            className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <span>Home</span>
          </Link>
          <Link
            to="/events"
            className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Calendar className="h-5 w-5" />
            <span>Events</span>
          </Link>
          {/* <Link
            to="/about"
            className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Info className="h-5 w-5" />
            <span>About</span>
          </Link> */}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="sm:hidden overflow-hidden"
          >
            <nav className="px-4 pt-2 pb-4 flex flex-col space-y-2">
              <Link
                to="/"
                className="block text-gray-600 hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/events"
                className="block text-gray-600 hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Events
              </Link>
              {/* <Link
                to="/about"
                className="block text-gray-600 hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link> */}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
