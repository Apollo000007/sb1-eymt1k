import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Camera, Music, Video, Mic, Star, AlertCircle, Sparkles } from 'lucide-react';

const Audition = () => {
  const [formData, setFormData] = useState({
    name: '',
    furigana: '',
    email: '',
    phone: '',
    birthdate: '',
    gender: '',
    category: '',
    experience: '',
    message: '',
    agreement: false
  });

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const categories = [
    { icon: <Camera size={24} />, name: '俳優・モデル' },
    { icon: <Music size={24} />, name: '歌手' },
    { icon: <Video size={24} />, name: 'タレント' },
    { icon: <Mic size={24} />, name: '声優' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50 pt-20">
      {/* ヘッダー */}
      <div className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80"
            alt="audition header"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-pink-500/30 to-purple-600/30" />
        </div>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 h-full flex items-center justify-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-center text-white drop-shadow-lg">
            オーディション募集中
          </h1>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-20">
        {/* LINE QRコード */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <div className="inline-block bg-white p-8 rounded-2xl shadow-xl">
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              LINEで簡単応募
            </h2>
            <img
              src="https://qr-official.line.me/gs/M_906vsdex_BW.png"
              alt="LINE QR Code"
              className="w-48 h-48 mx-auto mb-4"
            />
            <p className="text-gray-600">
              QRコードを読み取って<br />友だち追加してください
            </p>
          </div>
        </motion.div>

        {/* 応募フォーム */}
        <motion.div
          ref={ref}
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            応募フォーム
          </h2>

          {/* カテゴリー選択 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {categories.map((category) => (
              <motion.button
                key={category.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-4 rounded-xl ${
                  formData.category === category.name
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white'
                    : 'bg-gray-50 hover:bg-gray-100'
                } transition-all duration-300 flex flex-col items-center gap-2`}
                onClick={() => setFormData({ ...formData, category: category.name })}
              >
                {category.icon}
                <span className="text-sm">{category.name}</span>
              </motion.button>
            ))}
          </div>

          {/* 応募要項 */}
          <div className="mb-12 p-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Star className="text-pink-500" />
              応募要項
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• 年齢：12歳～25歳まで</li>
              <li>• 国籍：不問</li>
              <li>• 経験：不問（未経験歓迎）</li>
              <li>• 特典：合格者には専属トレーニング提供</li>
            </ul>
          </div>

          {/* 注意事項 */}
          <div className="mb-12 p-6 bg-yellow-50 rounded-xl">
            <div className="flex items-start gap-4">
              <AlertCircle className="text-yellow-500 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-lg font-semibold mb-2">注意事項</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 未成年の方は保護者の同意が必要です</li>
                  <li>• 書類選考後、面接を実施します</li>
                  <li>• 合否結果は2週間以内にご連絡します</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 装飾的な要素 */}
          <div className="absolute -top-10 -right-10 text-pink-500/20">
            <Sparkles size={100} />
          </div>
          <div className="absolute -bottom-10 -left-10 text-purple-500/20">
            <Sparkles size={100} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Audition;