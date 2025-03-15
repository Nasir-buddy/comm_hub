import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Users, Calendar } from 'lucide-react';
import gsap from 'gsap';

const Hero = () => {
  const titleRef = useRef(null);
  const statsRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const tl = gsap.timeline({
      // Clear GSAP inline styles after the animation completes
      onComplete: () => gsap.set(titleRef.current, { clearProps: "all" })
    });

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power4.out" }
    )
    .from(
      statsRef.current.children,
      {
        duration: 0.8,
        y: 30,
        opacity: 0,
        stagger: 0.2,
        ease: "power3.out"
      },
      "-=0.5"
    );
  }, []);

  const stats = [
    { icon: Users, count: "1000+", label: "Members" },
    { icon: Calendar, count: "50+", label: "Events Monthly" },
    { icon: Heart, count: "100%", label: "Love & Support" }
  ];

  return (
    <div className="relative min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 to-purple-900/95" />
        <img 
          src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
          alt="Community gathering"
          className="w-full h-full object-cover opacity-40"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Title */}
          <motion.div
            ref={titleRef}
            className="space-y-6 mb-16"
          >
            <h1 className="text-6xl md:text-7xl font-bold leading-tight text-white drop-shadow-lg">
              Connecting People Across
              <span className="block text-yellow-300 mt-2">Faiths & Interests</span>
            </h1>
            <p className="text-xl md:text-2xl text-white drop-shadow-md font-medium max-w-3xl mx-auto">
              Join our vibrant community where diversity is celebrated and connections are made that last a lifetime.
            </p>
          </motion.div>

          {/* Stats Section */}
          <div 
            ref={statsRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white/20 backdrop-blur-md rounded-xl p-6 shadow-xl border border-white/10"
              >
                <stat.icon className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
                <h3 className="text-3xl font-bold text-white">{stat.count}</h3>
                <p className="text-yellow-50 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/events')}
              className="bg-yellow-400 text-blue-900 px-10 py-4 rounded-full text-lg font-bold shadow-xl hover:bg-yellow-300 transition-colors"
            >
              Explore Events
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.5 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white/30 rounded-full" />
        <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-white/30 rounded-full" />
        <div className="absolute top-1/2 right-1/4 w-16 h-16 border-2 border-white/30 rounded-full" />
      </motion.div>
    </div>
  );
};

export default Hero;
