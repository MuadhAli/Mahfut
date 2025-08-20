import React from 'react';
import { motion } from 'framer-motion';
import ArticleCard from './ArticleCard';

const FeaturedArticles = ({ articles, categories, onReadMore }) => (
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
          Featured Articles
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Our most popular and insightful articles on construction materials and industry trends
        </p>
      </motion.div>
      <div className="grid lg:grid-cols-2 gap-8">
        {articles.map((article, index) => (
          <ArticleCard
            key={article.id}
            article={article}
            categoryName={categories.find(cat => cat.id === article.category)?.name}
            onReadMore={onReadMore}
            isFeatured={true}
          />
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedArticles;