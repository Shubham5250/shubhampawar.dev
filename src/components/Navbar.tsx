'use client';

import { motion } from 'framer-motion';
import { User, Users, GraduationCap, Briefcase, BookOpen, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

const navItems = [
  { name: 'About', icon: User, href: '#about' },
  { name: 'Community', icon: Users, href: '#community' },
  { name: 'Education', icon: GraduationCap, href: '#education' },
  { name: 'My Work', icon: Briefcase, href: '#my-work' },
  { name: 'Blogs', icon: BookOpen, href: '#blogs' },
  { name: 'Contact', icon: Mail, href: '#contact' },
];

export function Navbar() {
  const [activeTab, setActiveTab] = useState('About');

  // Scroll spy to detect which section is active
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => {
        const id = item.href.replace('#', '');
        return document.getElementById(id);
      }).filter(Boolean);

      const scrollPosition = window.scrollY + 200; // Offset for better detection

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveTab(navItems[i].name);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (name: string) => {
    setActiveTab(name);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-secondary/80 backdrop-blur-lg border-b border-l border-r border-border/50 shadow-lg"
      style={{ borderTop: 'none' }}
    >
      <div className="relative flex items-center justify-center gap-1 px-3 py-4 max-w-7xl mx-auto">
        {navItems.map((item, index) => (
          <motion.a
            key={item.name}
            href={item.href}
            onClick={() => handleClick(item.name)}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`relative flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 group ${
              activeTab === item.name ? 'bg-primary/10' : 'hover:bg-primary/5'
            }`}
            style={{
              color: activeTab === item.name ? '#11c299' : undefined
            }}
          >
            <item.icon 
              className={`w-4 h-4 transition-transform ${
                activeTab === item.name ? 'scale-110' : 'group-hover:scale-110'
              }`}
              style={{
                color: activeTab === item.name ? '#11c299' : undefined
              }}
            />
            <span 
              className={`hidden sm:inline text-sm ${
                activeTab === item.name ? 'font-bold' : 'font-medium'
              }`}
              style={{
                color: activeTab === item.name ? '#11c299' : undefined
              }}
            >
              {item.name}
            </span>

            {/* Animated underline for active tab */}
            {activeTab === item.name && (
              <motion.div
                layoutId="activeTabIndicator"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 rounded-full"
                style={{ 
                  width: 'calc(100% - 8px)',
                  backgroundColor: '#11c299'
                }}
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30
                }}
              />
            )}
          </motion.a>
        ))}
      </div>
    </motion.nav>
  );
}

