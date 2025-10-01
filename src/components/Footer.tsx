'use client';

import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-secondary/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-sm"
          >
            <p>Designed by Shubham Pawar</p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
