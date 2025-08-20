import React from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import ArticleCard from './ArticleCard';

const ArticlesGrid = ({ articles, categories, selectedCategory, onReadMore }) => (
  <section className="section-padding">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-[#142849] mb-6">
          {selectedCategory === 'all' ? 'Latest Articles' : `${categories.find(cat => cat.id === selectedCategory)?.name} Articles`}
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {articles.length} article{articles.length !== 1 ? 's' : ''} found
        </p>
      </motion.div>

      {articles.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <ArticleCard
              key={article.id}
              article={article}
              categoryName={categories.find(cat => cat.id === article.category)?.name}
              onReadMore={onReadMore}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-600 mb-2">No Articles Found</h3>
          <p className="text-gray-500">
            Try adjusting your search terms or category filter to find more articles.
          </p>
        </div>
      )}
    </div>
  </section>
);

export default ArticlesGrid;