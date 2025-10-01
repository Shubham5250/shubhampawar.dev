'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function BackgroundEffects() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* CSS-only animated background - Much more performant */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
        {/* Animated Gradient Blobs using pure CSS */}
        <div 
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-3xl animate-blob"
          style={{ 
            background: 'radial-gradient(circle, rgba(17, 194, 153, 0.25) 0%, rgba(17, 194, 153, 0.05) 70%, transparent 100%)',
            animation: 'blob 20s ease-in-out infinite',
          }}
        />
        
        <div 
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl animate-blob"
          style={{ 
            background: 'radial-gradient(circle, rgba(17, 194, 153, 0.2) 0%, rgba(17, 194, 153, 0.05) 70%, transparent 100%)',
            animation: 'blob 25s ease-in-out infinite 5s',
          }}
        />

        <div 
          className="absolute -bottom-40 left-20 w-[550px] h-[550px] rounded-full blur-3xl animate-blob"
          style={{ 
            background: 'radial-gradient(circle, rgba(17, 194, 153, 0.22) 0%, rgba(17, 194, 153, 0.05) 70%, transparent 100%)',
            animation: 'blob 22s ease-in-out infinite 10s',
          }}
        />

        {/* Static Grid Pattern - No animation for performance */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: theme === 'dark' 
              ? 'linear-gradient(rgba(17, 194, 153, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(17, 194, 153, 0.15) 1px, transparent 1px)'
              : 'linear-gradient(rgba(17, 194, 153, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(17, 194, 153, 0.1) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        {/* Radial Gradient Overlay for depth */}
        <div 
          className="absolute inset-0"
          style={{
            background: theme === 'dark'
              ? 'radial-gradient(circle at 30% 40%, rgba(17, 194, 153, 0.08) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(17, 194, 153, 0.06) 0%, transparent 50%)'
              : 'radial-gradient(circle at 30% 40%, rgba(17, 194, 153, 0.05) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(17, 194, 153, 0.04) 0%, transparent 50%)',
          }}
        />

        {/* Vignette effect */}
        <div 
          className="absolute inset-0"
          style={{
            background: theme === 'dark'
              ? 'radial-gradient(circle at center, transparent 0%, rgba(15, 23, 41, 0.3) 100%)'
              : 'radial-gradient(circle at center, transparent 0%, rgba(255, 255, 255, 0.3) 100%)',
          }}
        />
      </div>

    </>
  );
}

