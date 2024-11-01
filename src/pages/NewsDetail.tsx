import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { motion } from 'framer-motion';
import { newsItems } from '../data/newsData';

const NewsDetail = () => {
  const { id } = useParams();
  const newsItem = newsItems.find(item => item.id === Number(id));

  if (!newsItem) {
    return (
      <div className="min-h-screen bg-black pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-gray-400 mb-4">記事が見つかりませんでした</h1>
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-pink-500 hover:text-pink-400 transition-colors"
          >
            <ArrowLeft size={20} />
            ニュース一覧に戻る
          </Link>
        </div>
      </div>
    );
  }

  // Generate a longer content for the detail page by repeating the content
  const fullContent = `${newsItem.content}\n\n${newsItem.content}\n\n${newsItem.content}`;

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* ヘッダー画像 */}
      <div className="relative h-[50vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          <img
            src={newsItem.image}
            alt={newsItem.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-black" />
        </motion.div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-5xl font-bold text-white mb-4"
            >
              {newsItem.title}
            </motion.h1>
          </div>
        </div>
      </div>

      {/* コンテンツ */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* メタ情報 */}
          <div className="flex items-center gap-6 mb-8 text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{newsItem.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag size={18} />
              <span>{newsItem.category}</span>
            </div>
          </div>

          {/* 本文 */}
          <div className="prose prose-invert max-w-none">
            {fullContent.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-300 mb-6 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* 戻るボタン */}
          <div className="mt-12">
            <Link
              to="/news"
              className="inline-flex items-center gap-2 text-pink-500 hover:text-pink-400 transition-colors"
            >
              <ArrowLeft size={20} />
              ニュース一覧に戻る
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NewsDetail;