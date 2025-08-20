import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import PageTransition from '@/components/PageTransition';
import HeroSection from '@/components/blog/HeroSection';
import SearchAndFilter from '@/components/blog/SearchAndFilter';
import FeaturedArticles from '@/components/blog/FeaturedArticles';
import ArticlesGrid from '@/components/blog/ArticlesGrid';
import NewsletterSignup from '@/components/blog/NewsletterSignup';
import { articlesData, categoriesData } from '@/components/blog/data';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { toast } = useToast();

  const handleReadMore = () => {
    toast({
      title: "🚧 Blog Article",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Newsletter Subscription",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const filteredArticles = articlesData.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticles = articlesData.filter(article => article.featured);

  return (
    <PageTransition>
      <Helmet>
        <title>Construction Industry Blog - MAHFUT Expert Insights & News</title>
        <meta name="description" content="Stay updated with the latest construction industry news, material guides, project updates, and expert insights from MAHFUT Construction Material Supplies." />
        <meta property="og:title" content="MAHFUT Construction Blog - Industry Insights & Expert Advice" />
        <meta property="og:description" content="Expert insights on construction materials, industry trends, sustainability, and project updates from Saudi Arabia's leading construction supplier." />
      </Helmet>

      <HeroSection />

      <SearchAndFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categoriesData}
      />

      {selectedCategory === 'all' && searchTerm === '' && (
        <FeaturedArticles 
          articles={featuredArticles} 
          categories={categoriesData}
          onReadMore={handleReadMore} 
        />
      )}

      <ArticlesGrid
        articles={filteredArticles}
        categories={categoriesData}
        selectedCategory={selectedCategory}
        onReadMore={handleReadMore}
      />

      <NewsletterSignup onSubmit={handleNewsletterSubmit} />
    </PageTransition>
  );
};

export default Blog;