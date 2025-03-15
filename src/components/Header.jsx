import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Calendar, Info } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="bg-white shadow-md"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Users className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-blue-600">CommunionHub</span>
          </Link>
          
          <nav className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors">
              <span>Home</span>
            </Link>
            <Link to="/events" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors">
              <Calendar className="h-5 w-5" />
              <span>Events</span>
            </Link>
            <Link to="/about" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors">
              <Info className="h-5 w-5" />
              <span>About</span>
            </Link>
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;