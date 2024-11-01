import React from 'react';
import { Filter } from 'lucide-react';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div className="flex items-center gap-4 mb-8 overflow-x-auto pb-2">
      <Filter className="text-gray-400" size={20} />
      {categories.map(category => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors duration-200 ${
            selectedCategory === category
              ? 'bg-gradient-to-r from-pink-500 to-violet-500 text-white'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          {category === 'all' ? 'すべて' : category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;