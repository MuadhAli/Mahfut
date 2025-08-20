import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Tag, Clock, Eye } from 'lucide-react';

const ArticleCard = ({ article, categoryName, onReadMore, isFeatured = false }) => {
  if (isFeatured) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover"
      >
        <img  
          className="w-full h-64 object-cover"
          alt={article.image}
         src="https://images.unsplash.com/photo-1548778052-311f4bc2b502" />
        <div className="p-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-[#E46A1E] text-white px-3 py-1 rounded-full text-sm font-semibold capitalize">
              {categoryName}
            </span>
            <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
              Featured
            </span>
          </div>
          <h3 className="text-2xl font-bold text-[#142849] mb-4 line-clamp-2">
            {article.title}
          </h3>
          <p className="text-gray-600 mb-6 line-clamp-3">{article.excerpt}</p>
          <div className="flex flex-wrap items-center justify-between text-sm text-gray-500 mb-6 gap-y-2">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                {article.author}
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(article.date).toLocaleDateString()}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {article.readTime}
              </div>
              <div className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                {article.views}
              </div>
            </div>
          </div>
          <button
            onClick={onReadMore}
            className="btn-primary inline-flex items-center gap-2"
          >
            Read Full Article <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover"
    >
      <img  
        className="w-full h-48 object-cover"
        alt={article.image}
       src="https://images.unsplash.com/photo-1548778052-311f4bc2b502" />
      <div className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Tag className="w-4 h-4 text-[#E46A1E]" />
          <span className="text-[#E46A1E] text-sm font-semibold capitalize">
            {categoryName}
          </span>
        </div>
        <h3 className="text-xl font-bold text-[#142849] mb-3 line-clamp-2">
          {article.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            {article.author}
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {new Date(article.date).toLocaleDateString()}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {article.readTime}
            </div>
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              {article.views}
            </div>
          </div>
          <button
            onClick={onReadMore}
            className="text-[#E46A1E] font-semibold hover:text-[#d55a1a] transition-colors flex items-center gap-1"
          >
            Read More <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.article>
  );
};

export default ArticleCard;