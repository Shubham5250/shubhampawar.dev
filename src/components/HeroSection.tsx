'use client';

import { motion } from 'framer-motion';
import { Smartphone, Code, Database, Coffee } from 'lucide-react';
import { useTheme } from 'next-themes';

const skills = [
  { name: 'Flutter', icon: Smartphone, color: 'text-blue-500' },
  { name: 'Android', icon: Smartphone, color: 'text-green-500' },
  { name: 'Java', icon: Code, color: 'text-orange-500' },
  { name: 'Backend', icon: Database, color: 'text-purple-500' },
];

export function HeroSection() {
  const { theme } = useTheme();
  
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-8 sm:py-16">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.1, 1, 1.1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 6, repeat: Infinity, delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
            className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 sm:mb-8 relative"
          >
            <div className="w-full h-full rounded-full overflow-hidden shadow-2xl animate-glow border-4 border-primary/30">
              <img 
                src="/shubham-photo.png" 
                alt="Shubham Pawar" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Rotating rings with orbiting dots */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-primary/30 rounded-full"
            >
              {/* Orbiting dots on inner ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 left-1/2 w-3 h-3 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-0 left-1/2 w-3 h-3 bg-primary rounded-full transform -translate-x-1/2 translate-y-1/2"
              />
            </motion.div>

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-8px] sm:inset-[-12px] border-2 border-primary/40 rounded-full"
            >
              {/* Orbiting dots on middle ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 left-1/2 w-2 h-2 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute right-0 top-1/2 w-2 h-2 bg-primary rounded-full transform translate-x-1/2 -translate-y-1/2"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-0 left-1/2 w-2 h-2 bg-primary rounded-full transform -translate-x-1/2 translate-y-1/2"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 top-1/2 w-2 h-2 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2"
              />
            </motion.div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-16px] sm:inset-[-24px] border-2 border-primary/20 rounded-full"
            >
              {/* Orbiting dots on outer ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 left-1/2 w-2 h-2 bg-primary/80 rounded-full transform -translate-x-1/2 -translate-y-1/2"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute right-0 top-1/2 w-2 h-2 bg-primary/80 rounded-full transform translate-x-1/2 -translate-y-1/2"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-0 left-1/2 w-2 h-2 bg-primary/80 rounded-full transform -translate-x-1/2 translate-y-1/2"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 top-1/2 w-2 h-2 bg-primary/80 rounded-full transform -translate-x-1/2 -translate-y-1/2"
              />
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 text-foreground"
          >
            Shubham Pawar
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8"
          >
            Mobile Developer & Backend Engineer
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 relative overflow-hidden">
            <span 
              className="inline-block bg-gradient-to-r from-primary via-white to-primary bg-[length:200%_100%] bg-clip-text text-transparent"
              style={{
                backgroundImage: theme === 'dark' 
                  ? 'linear-gradient(90deg, #039dfc, #ffffff, #039dfc)'
                  : 'linear-gradient(90deg, #039dfc, #000000, #039dfc)',
                backgroundSize: '200% 100%',
                animation: 'shimmer 4s ease-in-out infinite'
              }}
            >
              Crafting best experience for you
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8">
            I'm crafting something amazing! My portfolio website is under construction, 
            showcasing my expertise in mobile development and backend engineering.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto mb-8 sm:mb-12"
        >
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
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {skill.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="space-y-4 sm:space-y-6"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="mailto:shubhampawar.it@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground rounded-full font-semibold text-base sm:text-lg hover:bg-primary-600 transition-colors duration-300 shadow-lg hover:shadow-xl inline-block"
            >
              Get Notified
            </motion.a>
            <motion.a
              href="https://github.com/Shubham5250"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-primary text-primary rounded-full font-semibold text-base sm:text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 inline-block"
            >
              View Resume
            </motion.a>
          </div>

        
        </motion.div>
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
