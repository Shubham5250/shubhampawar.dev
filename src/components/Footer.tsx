'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/Shubham5250', color: 'hover:text-gray-400' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/shubhampawar99/', color: 'hover:text-blue-400' },
  { name: 'Email', icon: Mail, href: 'mailto:shubhampawar.it@gmail.com', color: 'hover:text-red-400' },
  { name: 'Twitter', icon: Twitter, href: 'https://x.com/ShubhamPawar93', color: 'hover:text-blue-300' },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex justify-center space-x-6 mb-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`p-3 rounded-full bg-secondary hover:bg-accent transition-all duration-300 ${link.color}`}
                aria-label={link.name}
              >
                <link.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-sm"
          >
            <p>&copy; 2025 Shubham Pawar. All rights reserved.</p>
            <p className="mt-2">Built with Next.js, Tailwind CSS & Framer Motion</p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
