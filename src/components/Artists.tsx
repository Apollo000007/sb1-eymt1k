import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Youtube, ChevronLeft, ChevronRight } from 'lucide-react';
import { creators } from '../data/creatorsData';

const Artists = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      carouselRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleSocialClick = (e: React.MouseEvent, url: string) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(url, '_blank');
  };

  return (
    <section id="artists" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
            クリエイター
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            才能豊かなクリエイターたちの活動をご紹介
          </p>
        </motion.div>

        <div className="relative group">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70"
          >
            <ChevronRight size={24} />
          </button>

          <div
            ref={carouselRef}
            className="overflow-x-auto scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            <div className="flex gap-6 pb-4" style={{ width: 'max-content' }}>
              {creators.map((creator, index) => (
                <motion.div
                  key={creator.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="w-72 flex-shrink-0"
                >
                  <Link 
                    to={`/creator/${creator.id}`}
                    className="block bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
                  >
                    <div className="relative h-80">
                      <img
                        src={creator.image}
                        alt={creator.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-xl font-bold text-white mb-1">{creator.name}</h3>
                        <p className="text-gray-300 text-sm mb-2">{creator.category}</p>
                        <p className="text-pink-400 font-semibold text-sm mb-3">
                          フォロワー {creator.followers}
                        </p>
                        <div className="flex space-x-3">
                          {creator.social.instagram && (
                            <button
                              onClick={(e) => handleSocialClick(e, creator.social.instagram!)}
                              className="text-gray-400 hover:text-pink-400 transition-colors"
                            >
                              <Instagram size={18} />
                            </button>
                          )}
                          {creator.social.youtube && (
                            <button
                              onClick={(e) => handleSocialClick(e, creator.social.youtube!)}
                              className="text-gray-400 hover:text-pink-400 transition-colors"
                            >
                              <Youtube size={18} />
                            </button>
                          )}
                          {creator.social.twitter && (
                            <button
                              onClick={(e) => handleSocialClick(e, creator.social.twitter!)}
                              className="text-gray-400 hover:text-pink-400 transition-colors"
                            >
                              <Twitter size={18} />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/creators"
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium hover:scale-105 transition-transform duration-300"
          >
            全てのクリエイターを見る
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Artists;