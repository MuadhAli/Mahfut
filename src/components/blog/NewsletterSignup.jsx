import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const NewsletterSignup = ({ onSubmit }) => (
  <section className="section-padding bg-[#142849] text-white">
    <div className="container mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Stay Updated
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Subscribe to our newsletter and never miss the latest insights on construction materials and industry trends.
        </p>
        <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 px-6 py-4 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#E46A1E]"
            required
          />
          <button
            type="submit"
            className="bg-[#E46A1E] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#d55a1a] transition-colors flex items-center justify-center gap-2"
          >
            Subscribe <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </motion.div>
    </div>
  </section>
);

export default NewsletterSignup;