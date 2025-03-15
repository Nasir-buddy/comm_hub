import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const Hero = () => {
  const titleRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    gsap.from(titleRef.current, {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: "power3.out"
    });
  }, []);

  return (
    <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 h-[600px] flex items-center justify-center text-white">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
          alt="Community gathering"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="relative text-center px-4 max-w-4xl mx-auto">
        <h1 ref={titleRef} className="text-5xl font-bold mb-6">
          Connecting People Across Faiths & Interests
        </h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-xl mb-8"
        >
          Connecting people of all faiths through events and community support
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/events')}
          className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-50 transition-colors"
        >
          Explore Events
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;