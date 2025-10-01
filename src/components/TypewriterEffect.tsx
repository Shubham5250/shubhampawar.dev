'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TypewriterItem {
  text: string;
  emoji: string;
}

const items: TypewriterItem[] = [
  { 
    text: 'Mobile & Backend Developer', 
    emoji: '💻'
  },
  { 
    text: 'Flutter | Android', 
    emoji: '📱'
  },
  { 
    text: 'Blogger', 
    emoji: '✍️'
  },
  { 
    text: 'Pune, MH, India', 
    emoji: '📍'
  },
];

export function TypewriterEffect() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const currentItem = items[currentIndex];
    const currentFullText = currentItem.text;

    if (isTyping) {
      // Typing
      if (displayText.length < currentFullText.length) {
        const timer = setTimeout(() => {
          setDisplayText(currentFullText.substring(0, displayText.length + 1));
        }, 60); // Faster typing speed (60ms)
        return () => clearTimeout(timer);
      } else {
        // Finished typing, wait then fade out
        const timer = setTimeout(() => {
          setFadeOut(true);
          setIsTyping(false);
        }, 2000); // Wait 2 seconds before fading out
        return () => clearTimeout(timer);
      }
    } else if (fadeOut) {
      // After fade out animation, move to next item
      const timer = setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        setDisplayText('');
        setFadeOut(false);
        setIsTyping(true);
      }, 500); // Wait for fade out animation
      return () => clearTimeout(timer);
    }
  }, [displayText, isTyping, fadeOut, currentIndex]);

  return (
    <div className="flex items-center justify-center lg:justify-start gap-3 min-h-[40px] sm:min-h-[48px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: fadeOut ? 0 : 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 text-2xl sm:text-3xl"
        >
          {items[currentIndex].emoji}
        </motion.div>
      </AnimatePresence>
      
      <motion.div 
        className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium"
        animate={{ opacity: fadeOut ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <span>{displayText}</span>
        {isTyping && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
            className="inline-block w-[2px] h-5 sm:h-6 md:h-7 bg-primary ml-1 align-middle"
          />
        )}
      </motion.div>
    </div>
  );
}

