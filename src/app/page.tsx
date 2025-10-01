'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { LoadingScreen } from '@/components/LoadingScreen';
import { HeroSection } from '@/components/HeroSection';
import { Footer } from '@/components/Footer';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Navbar } from '@/components/Navbar';
import { BackgroundEffects } from '@/components/BackgroundEffects';
import { SocialSidebar } from '@/components/SocialSidebar';
import { EducationSection } from '@/components/EducationSection';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        ) : (
          <div className="md:pl-24 lg:pl-28">
            {/* Background Effects */}
            <BackgroundEffects />

            {/* Social Sidebar */}
            <SocialSidebar />

            {/* Navbar */}
            <Navbar />

            {/* Theme Toggle */}
            <div className="fixed top-4 right-6 z-50">
              <ThemeToggle />
            </div>

            {/* Main Content */}
            <HeroSection />
            
            {/* Sections for navigation */}
            <section id="community" className="min-h-screen flex items-center justify-center px-4 py-20" style={{ zIndex: 1 }}>
              <div className="container mx-auto px-4 max-w-4xl text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Community</h2>
                <p className="text-lg text-muted-foreground">Coming soon...</p>
              </div>
            </section>

            <EducationSection />

            <section id="my-work" className="min-h-screen flex items-center justify-center px-4 py-20" style={{ zIndex: 1 }}>
              <div className="container mx-auto px-4 max-w-4xl text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">My Work</h2>
                <p className="text-lg text-muted-foreground">Coming soon...</p>
              </div>
            </section>

            <section id="blogs" className="min-h-screen flex items-center justify-center px-4 py-20" style={{ zIndex: 1 }}>
              <div className="container mx-auto px-4 max-w-4xl text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Blogs</h2>
                <p className="text-lg text-muted-foreground">Coming soon...</p>
              </div>
            </section>

            <Footer />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
