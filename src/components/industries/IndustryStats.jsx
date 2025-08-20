import React from 'react';
import { motion } from 'framer-motion';

const IndustryStats = ({ stats }) => (
  <section className="section-padding bg-[#142849] text-white">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Industry Impact
        </h2>
        <p className="text-xl opacity-90 max-w-3xl mx-auto">
          Our contribution to Saudi Arabia's construction industry across all major sectors
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl md:text-5xl font-bold text-[#E46A1E] mb-2">{stat.number}</h3>
            <p className="text-gray-300">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default IndustryStats;