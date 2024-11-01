import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Rocket, Heart, Globe } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const values = [
    {
      icon: <Star className="w-8 h-8 text-orange-500" />,
      title: "夢を叶える",
      description: "才能ある個性を見出し、一人ひとりの夢の実現をサポートします。エンターテイメントの世界で輝く未来へ導きます。"
    },
    {
      icon: <Rocket className="w-8 h-8 text-purple-500" />,
      title: "成長を支える",
      description: "プロフェッショナルなトレーニングと経験豊富なメンターシップで、アーティストとしての成長を支援します。"
    },
    {
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      title: "楽しみを創造",
      description: "エンターテイメントを通じて、人々に感動と喜びを届けます。クリエイターの想いを世界中に発信します。"
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      title: "可能性を広げる",
      description: "グローバルな視点でエンターテイメントの新しい可能性を追求し、革新的なコンテンツを生み出します。"
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* ヘッダーセクション */}
      <div className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522325430955-e2d3bb38c71a?auto=format&fit=crop&q=80"
            alt="about header"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-center bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
            企業理念
          </h1>
        </div>
      </div>

      {/* ビジョンセクション */}
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
              Vision
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              私たちは、エンターテイメントの力で世界中の人々に感動と喜びを届け、
              クリエイターの夢と可能性を無限に広げていきます。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-gray-800 rounded-full">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 会社情報セクション */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
              会社概要
            </h2>
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-center py-4 border-b border-gray-800">
                <div className="md:w-1/3 font-medium text-gray-300">会社名</div>
                <div className="md:w-2/3 text-white">Anniversary Entertainment株式会社</div>
              </div>
              <div className="flex flex-col md:flex-row md:items-center py-4 border-b border-gray-800">
                <div className="md:w-1/3 font-medium text-gray-300">設立</div>
                <div className="md:w-2/3 text-white">2020年4月1日</div>
              </div>
              <div className="flex flex-col md:flex-row md:items-center py-4 border-b border-gray-800">
                <div className="md:w-1/3 font-medium text-gray-300">所在地</div>
                <div className="md:w-2/3 text-white">〒123-4567 東京都渋谷区代々木1-2-3</div>
              </div>
              <div className="flex flex-col md:flex-row md:items-center py-4 border-b border-gray-800">
                <div className="md:w-1/3 font-medium text-gray-300">事業内容</div>
                <div className="md:w-2/3 text-white">
                  タレントマネジメント事業<br />
                  音楽制作・著作権管理<br />
                  イベント企画・運営<br />
                  デジタルコンテンツ制作
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;