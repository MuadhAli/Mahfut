import React from 'react';
import { motion } from 'framer-motion';

const CapabilitiesSection = ({ capabilities }) => (
  <section className="section-padding bg-gray-50">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-[#142849] mb-6">
          Our Industry Capabilities
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          What sets MAHFUT apart in serving diverse industry requirements with excellence and expertise
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {capabilities.map((capability, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-[#E46A1E] rounded-full flex items-center justify-center mx-auto mb-6">
              <capability.icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#142849] mb-3">{capability.title}</h3>
            <p className="text-gray-600">{capability.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CapabilitiesSection;