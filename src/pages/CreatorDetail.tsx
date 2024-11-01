import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Youtube, Mail, ArrowLeft } from 'lucide-react';
import { creators } from '../data/creatorsData';

const CreatorDetail = () => {
  const { id } = useParams();
  const creator = creators.find(c => c.id === Number(id));

  if (!creator) {
    return (
      <div className="min-h-screen bg-black pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-gray-400 mb-4">クリエイターが見つかりませんでした</h1>
          <Link
            to="/creators"
            className="inline-flex items-center gap-2 text-pink-500 hover:text-pink-400 transition-colors"
          >
            <ArrowLeft size={20} />
            クリエイター一覧に戻る
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-black pt-20"
    >
      {/* ヘッダー画像 */}
      <motion.div 
        className="relative h-[60vh] overflow-hidden"
        initial={{ height: "0vh", opacity: 0 }}
        animate={{ height: "60vh", opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src={creator.image}
            alt={creator.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-black" />
        </motion.div>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white mb-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {creator.name}
            </motion.h1>
            <motion.p
              className="text-xl text-gray-200 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {creator.category}
            </motion.p>
            <motion.div
              className="flex gap-4 justify-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {creator.social.instagram && (
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={creator.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-pink-400 transition-colors"
                >
                  <Instagram size={24} />
                </motion.a>
              )}
              {creator.social.youtube && (
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={creator.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-pink-400 transition-colors"
                >
                  <Youtube size={24} />
                </motion.a>
              )}
              {creator.social.twitter && (
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={creator.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-pink-400 transition-colors"
                >
                  <Twitter size={24} />
                </motion.a>
              )}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* コンテンツ */}
      <motion.div 
        className="max-w-4xl mx-auto px-4 py-16"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <div className="space-y-12">
          {/* プロフィール */}
          <motion.section
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              プロフィール
            </h2>
            <motion.div
              className="bg-gray-900 rounded-xl p-6"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-400 mb-2">フォロワー数</p>
                  <p className="text-white text-lg">{creator.followers}</p>
                </div>
                <div>
                  <p className="text-gray-400 mb-2">カテゴリー</p>
                  <p className="text-white text-lg">{creator.category}</p>
                </div>
              </div>
            </motion.div>
          </motion.section>

          {/* 仕事の依頼ボタン */}
          <motion.section 
            className="text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <Link to={`/work-request/${creator.id}`}>
              <motion.button
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-medium text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Mail className="w-5 h-5" />
                仕事の依頼
              </motion.button>
            </Link>
          </motion.section>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CreatorDetail;