import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { NewsItem } from '../types/news';

interface NewsCardProps {
  item: NewsItem;
  index: number;
}

const NewsCard: React.FC<NewsCardProps> = ({ item, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={`/news/${item.id}`}
        className="block bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
      >
        {item.image && (
          <div className="relative h-48">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
          </div>
        )}
        <div className="p-6">
          <div className="flex items-center gap-4 mb-3">
            <span className="text-gray-400 text-sm">{item.date}</span>
            <span className="px-3 py-1 rounded-full text-xs bg-gradient-to-r from-pink-500 to-violet-500 text-white">
              {item.category}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
          <p className="text-gray-400 text-sm line-clamp-2">{item.content}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default NewsCard;