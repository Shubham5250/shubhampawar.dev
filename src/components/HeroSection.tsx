'use client';

import { motion } from 'framer-motion';
import { Smartphone, Code, Database } from 'lucide-react';
import { useTheme } from 'next-themes';
import { TypewriterEffect } from './TypewriterEffect';

const skills = [
  { name: 'Flutter', icon: Smartphone, color: 'text-blue-500' },
  { name: 'Android', icon: Smartphone, color: 'text-green-500' },
  { name: 'Java', icon: Code, color: 'text-orange-500' },
  { name: 'Backend', icon: Database, color: 'text-purple-500' },
];

export function HeroSection() {
  const { theme } = useTheme();
  
  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-16 sm:py-20 pt-24 sm:pt-28" style={{ zIndex: 1 }}>
      <div className="container mx-auto px-4 max-w-7xl relative" style={{ zIndex: 2 }}>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Image, Name, and Intro */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
              className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 mb-6 sm:mb-8"
            >
              <div 
                className="w-full h-full rounded-full overflow-hidden shadow-lg"
                style={{ border: '4px solid #11c299' }}
              >
                <img 
                  src="/my_image.png" 
                  alt="Shubham Pawar" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-foreground"
            >
              Shubham Pawar
            </motion.h1>

            {/* Typewriter Effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mb-6 sm:mb-8"
            >
              <TypewriterEffect />
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <motion.a
                href="https://drive.google.com/file/d/1RIilnn6TJWsRfTEjYitgMgw4jpwCZAp7/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl text-center"
                style={{
                  border: '2px solid #11c299',
                  color: '#11c299'
                }}
              >
                View Resume
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 relative overflow-hidden text-center lg:text-left">
                <span 
                  className="inline-block bg-gradient-to-r from-primary via-white to-primary bg-[length:200%_100%] bg-clip-text text-transparent"
                  style={{
                    backgroundImage: theme === 'dark' 
                      ? 'linear-gradient(90deg, #11c299, #ffffff, #11c299)'
                      : 'linear-gradient(90deg, #11c299, #000000, #11c299)',
                    backgroundSize: '200% 100%',
                    animation: 'shimmer 4s ease-in-out infinite'
                  }}
                >
                  Crafting best experience for you
                </span>
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground text-center lg:text-left mb-2">
                🚧 This site is under construction
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground/80 text-center lg:text-left">
                Built with Next.js, TypeScript, Tailwind CSS & Framer Motion
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group"
                >
                  <div className="p-4 sm:p-6 bg-secondary/50 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                    <skill.icon className={`w-8 h-8 mx-auto mb-3 ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300 text-center">
                      {skill.name}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-4 h-4 bg-primary/30 rounded-full"
      />
      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-40 right-20 w-3 h-3 bg-primary/40 rounded-full"
      />
      <motion.div
        animate={{ y: [-5, 15, -5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-32 left-20 w-2 h-2 bg-primary/50 rounded-full"
      />
    </section>
  );
}
