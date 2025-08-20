import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => (
  <section className="relative h-96 overflow-hidden">
    <img  
      className="w-full h-full object-cover"
      alt="Construction industry professionals reading and discussing latest trends"
     src="https://images.unsplash.com/photo-1685432817839-fe6af105b128" />
    <div className="hero-overlay absolute inset-0"></div>
    <div className="relative z-10 h-full flex items-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Industry Insights</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Expert Knowledge, Industry Trends & Construction Material Insights
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;