'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Code } from 'lucide-react';
import { FaMedium, FaStackOverflow } from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/shubhampawar99/' },
  { name: 'GitHub', icon: Github, href: 'https://github.com/Shubham5250' },
  { name: 'Twitter', icon: Twitter, href: 'https://x.com/ShubhamPawar93' },
  { name: 'Medium', icon: FaMedium, href: 'https://medium.com/@shubhampawar99', isReactIcon: true },
  { name: 'Stack Overflow', icon: FaStackOverflow, href: 'https://stackoverflow.com/users/20764502/shubham-pawar', isReactIcon: true },
  { name: 'Email', icon: Mail, href: 'mailto:shubhampawar.it@gmail.com' },
];

export function SocialSidebar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showTooltip, setShowTooltip] = useState<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    timeoutRef.current = setTimeout(() => {
      setShowTooltip(index);
    }, 1200);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setShowTooltip(null);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="fixed left-6 bottom-6 z-40 hidden md:block"
    >
      <div className="flex flex-col gap-4">
        {socialLinks.map((link, index) => (
          <div key={link.name} className="relative">
            <motion.a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 + index * 0.1 }}
              whileHover={{ scale: 1.15, x: 5 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className="p-3 rounded-full backdrop-blur-sm transition-all duration-300 group block"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(17, 194, 153, 0.3))',
                border: '1px solid rgba(17, 194, 153, 0.2)',
              }}
              aria-label={link.name}
            >
              {link.isReactIcon ? (
                <link.icon 
                  className="w-5 h-5 transition-colors duration-300"
                  style={{ color: '#11c299' }}
                />
              ) : (
                <link.icon 
                  className="w-5 h-5 transition-colors duration-300"
                  style={{ color: '#11c299' }}
                />
              )}
            </motion.a>

            {/* Tooltip */}
            <AnimatePresence>
              {showTooltip === index && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-full ml-3 top-1/2 -translate-y-1/2 z-50 pointer-events-none whitespace-nowrap"
                >
                  <div className="bg-black text-white px-3 py-2 rounded text-xs font-medium shadow-lg">
                    {link.name}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
        
        {/* Vertical line */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="w-[2px] h-20 mx-auto origin-top"
          style={{ backgroundColor: '#11c299' }}
        />
      </div>
    </motion.div>
  );
}

