import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => (
  <section className="relative h-96 overflow-hidden">
    <img  
      className="w-full h-full object-cover"
      alt="Various construction projects across different industries"
     src="https://images.unsplash.com/photo-1524074581290-667ba4ba11ea" />
    <div className="hero-overlay absolute inset-0"></div>
    <div className="relative z-10 h-full flex items-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Industries We Serve</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Specialized Construction Material Solutions Across All Major Industries
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;