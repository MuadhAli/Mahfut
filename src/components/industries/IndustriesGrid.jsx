import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

const IndustryCard = ({ industry, onInquiry }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover"
  >
    <img  
      className="w-full h-48 object-cover"
      alt={industry.image}
     src="https://images.unsplash.com/photo-1687480747407-b7d8f8313742" />
    
    <div className="p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-[#142849] to-[#E46A1E] rounded-lg flex items-center justify-center">
          <industry.icon className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-[#142849]">{industry.title}</h3>
          <span className="text-[#E46A1E] text-sm font-semibold">{industry.projects}</span>
        </div>
      </div>
      
      <p className="text-gray-600 mb-4">{industry.description}</p>
      
      <div className="space-y-2 mb-6">
        <h4 className="font-semibold text-[#142849] text-sm">Our Services:</h4>
        <ul className="space-y-1">
          {industry.services.map((service, idx) => (
            <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle className="w-3 h-3 text-[#E46A1E] flex-shrink-0" />
              {service}
            </li>
          ))}
        </ul>
      </div>
      
      <button
        onClick={onInquiry}
        className="w-full btn-primary flex items-center justify-center gap-2"
      >
        Learn More <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  </motion.div>
);

const IndustriesGrid = ({ industries, onInquiry }) => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {industries.map((industry, index) => (
      <IndustryCard key={index} industry={industry} onInquiry={onInquiry} />
    ))}
  </div>
);

export default IndustriesGrid;