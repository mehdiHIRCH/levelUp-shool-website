// import React, { useState } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button';
import { motion } from 'framer-motion';
import { ConsultationModal } from './ConsultationModal';

interface HeroContent {
  title: string;
  subtitle: string;
  cta: {
    start: string;
    consult: string;
  };
}

export const Hero = ({ content }: { content: HeroContent }) => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  if (!content?.title || !content?.subtitle || !content?.cta) {
    return null;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <ConsultationModal 
        isOpen={isConsultationOpen} 
        onClose={() => setIsConsultationOpen(false)} 
      />

      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 z-10"></div>
        
        <motion.div 
          className="container mx-auto px-4 relative z-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200"
              variants={itemVariants}
            >
              {content.title}
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-12 text-gray-100"
              variants={itemVariants}
            >
              {content.subtitle}
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              variants={itemVariants}
            >
              <Link to="/register">
                <Button 
                  variant="primary"
                  className="group relative overflow-hidden w-full sm:w-auto"
                >
                  <span className="relative z-10">{content.cta.start}</span>
                  <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                </Button>
              </Link>
              <Button 
                variant="secondary"
                className="group relative overflow-hidden"
                onClick={() => setIsConsultationOpen(true)}
              >
                <span className="relative z-10">{content.cta.consult}</span>
                <div className="absolute inset-0 bg-white/20 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </Button>
            </motion.div>
          </div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/10 to-transparent"></div>
      </section>
    </>
  );
};
