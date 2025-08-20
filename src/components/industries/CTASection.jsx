import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Truck } from 'lucide-react';

const CTASection = ({ onInquiry }) => (
  <section className="section-padding bg-gradient-to-r from-[#142849] to-[#1a3154] text-white">
    <div className="container mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Partner with Industry Experts
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Whatever your industry, MAHFUT has the expertise and materials to support your construction projects with excellence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={onInquiry}
            className="btn-primary bg-[#E46A1E] hover:bg-[#d55a1a] inline-flex items-center gap-2"
          >
            Discuss Your Project <ArrowRight className="w-5 h-5" />
          </button>
          <button 
            onClick={onInquiry}
            className="btn-secondary border-white text-white hover:bg-white hover:text-[#142849] inline-flex items-center gap-2"
          >
            <Truck className="w-5 h-5" />
            Request Site Visit
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;