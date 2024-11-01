import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Instagram, Youtube, Twitter } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { creators } from '../data/creatorsData';

const Creators = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* ヘッダーセクション */}
      <div className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80"
            alt="creators header"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-center bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
            クリエイター一覧
          </h1>
        </div>
      </div>

      {/* クリエイター一覧 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {creators.map((creator, index) => (
            <CreatorCard key={creator.id} creator={creator} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

function CreatorCard({ creator, index }: { creator: any; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleSocialClick = (e: React.MouseEvent, url: string) => {
    e.preventDefault();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
    >
      <div className="relative h-96 cursor-pointer" onClick={() => window.location.href = `/creator/${creator.id}`}>
        <img
          src={creator.image}
          alt={creator.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-bold text-white mb-2">{creator.name}</h3>
          <p className="text-gray-300 mb-3">{creator.category}</p>
          <p className="text-pink-400 font-semibold mb-4">
            フォロワー {creator.followers}
          </p>
          
          <div className="flex space-x-4">
            {creator.social.instagram && (
              <button
                onClick={(e) => handleSocialClick(e, creator.social.instagram)}
                className="text-gray-400 hover:text-pink-400 transition-colors"
              >
                <Instagram size={20} />
              </button>
            )}
            {creator.social.youtube && (
              <button
                onClick={(e) => handleSocialClick(e, creator.social.youtube)}
                className="text-gray-400 hover:text-pink-400 transition-colors"
              >
                <Youtube size={20} />
              </button>
            )}
            {creator.social.twitter && (
              <button
                onClick={(e) => handleSocialClick(e, creator.social.twitter)}
                className="text-gray-400 hover:text-pink-400 transition-colors"
              >
                <Twitter size={20} />
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Creators;