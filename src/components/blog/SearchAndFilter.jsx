import React from 'react';
import { Search } from 'lucide-react';

const SearchAndFilter = ({ searchTerm, setSearchTerm, selectedCategory, setSelectedCategory, categories }) => (
  <section className="py-12 bg-white sticky top-20 z-40 border-b">
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
        <div className="relative w-full lg:w-auto lg:flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E46A1E] focus:border-transparent"
          />
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                selectedCategory === category.id
                  ? 'bg-[#E46A1E] text-white'
                  : 'bg-gray-100 text-[#142849] hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SearchAndFilter;