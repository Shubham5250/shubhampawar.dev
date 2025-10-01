'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const educationData = [
  {
    year: '2021-2025',
    institution: 'P.E.S Modern College of Engineering',
    location: 'Pune, Maharashtra',
    degree: 'Bachelor of Engineering - Information Technology',
    score: 'CGPA - 8.25',
    icon: GraduationCap,
    color: 'from-primary to-teal-400',
  },
  {
    year: '2021',
    institution: 'Urmi School & Hostel',
    location: 'Vadodara, Gujarat',
    degree: 'HSC (PCM)',
    score: '89%',
    icon: Award,
    color: 'from-blue-500 to-cyan-500',
  },
];

export function EducationSection() {
  return (
    <section id="education" className="min-h-screen flex items-center justify-center px-4 py-20" style={{ zIndex: 1 }}>
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Education
          </h2>
          <p className="text-muted-foreground text-lg">
            My academic journey
          </p>
        </motion.div>

        <div className="relative" style={{ zIndex: 1 }}>
          {/* Timeline line - behind dots */}
          <div 
            className="absolute left-8 md:left-1/2 top-0 bottom-0 transform md:-translate-x-1/2" 
            style={{ 
              width: '2px',
              background: 'linear-gradient(to bottom, #11c299, rgba(17, 194, 153, 0.5), #11c299)',
              zIndex: 1
            }} 
          />

          {/* Education items */}
          <div className="space-y-12 relative" style={{ zIndex: 2 }}>
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-row`}
              >
                {/* Timeline dot - positioned absolutely on top */}
                <div 
                  className="absolute left-8 md:left-1/2 transform -translate-x-1/2 md:-translate-x-1/2" 
                  style={{ zIndex: 20 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                    className="w-16 h-16 rounded-full flex items-center justify-center relative"
                    style={{ 
                      backgroundColor: '#0f1729',
                      border: '4px solid #11c299',
                      boxShadow: '0 0 20px rgba(17, 194, 153, 0.5)'
                    }}
                  >
                    <edu.icon className="w-8 h-8" style={{ color: '#11c299' }} />
                  </motion.div>
                </div>

                {/* Content card */}
                <div className={`w-full md:w-[calc(50%-4rem)] ml-24 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                }`} style={{ zIndex: 3 }}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                    <div className="relative bg-secondary/80 backdrop-blur-sm rounded-2xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-lg">
                      {/* Year badge */}
                      <div className="inline-block mb-3">
                        <span className={`px-4 py-1.5 bg-gradient-to-r ${edu.color} text-white text-sm font-semibold rounded-full shadow-md`}>
                          {edu.year}
                        </span>
                      </div>

                      {/* Institution */}
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                        {edu.institution}
                      </h3>

                      {/* Location */}
                      <p className="text-muted-foreground text-sm mb-3 flex items-center gap-2">
                        <span>📍</span>
                        {edu.location}
                      </p>

                      {/* Degree */}
                      <p className="text-foreground font-medium mb-2">
                        {edu.degree}
                      </p>

                      {/* Score */}
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-lg">
                        <span className="text-primary font-bold text-lg">
                          {edu.score}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

