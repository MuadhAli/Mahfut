import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';

const CaseStudyPreview = ({ caseStudy, onInquiry }) => (
  <section className="section-padding">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#142849] mb-6">
            Industry Success Story
          </h2>
          <h3 className="text-2xl font-semibold text-[#E46A1E] mb-4">
            {caseStudy.title}
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            {caseStudy.description}
          </p>
          <div className="space-y-3 mb-8">
            {caseStudy.stats.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#E46A1E]" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <button
            onClick={onInquiry}
            className="btn-primary inline-flex items-center gap-2"
          >
            View Case Study <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img  
            className="rounded-2xl shadow-2xl w-full"
            alt={caseStudy.image}
           src="https://images.unsplash.com/photo-1648614154065-a7726d454c59" />
        </motion.div>
      </div>
    </div>
  </section>
);

export default CaseStudyPreview;