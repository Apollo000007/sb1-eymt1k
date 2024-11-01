import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [isAnimating, setIsAnimating] = useState(true);

  const handleClick = () => {
    if (!isAnimating) {
      onComplete();
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center cursor-pointer overflow-hidden bg-black"
      onClick={handleClick}
    >
      {/* 動画背景の追加位置 
        以下のコメントを参考に動画を追加してください：
        
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/path/to/your/video.mp4" type="video/mp4" />
        </video>

        注意点：
        1. videoタグは必ずAnimated Backgroundの前（上）に配置
        2. 動画ファイルは public フォルダに配置
        3. ファイルパスは /video.mp4 のように public フォルダからの相対パスを指定
        4. 動画の上にオーバーレイを追加する場合は以下のdivを追加：
           <div className="absolute inset-0 bg-black/50" /> 
      */}

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-30"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: 'blur(100px)',
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.5, 1],
              background: [
                'rgba(236,72,153,0.3)',
                'rgba(139,92,246,0.3)',
                'rgba(236,72,153,0.3)'
              ]
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Central Anniversary Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 0.5,
            duration: 1,
            ease: [0.34, 1.56, 0.64, 1]
          }}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          <motion.div className="relative">
            <motion.span
              className="text-6xl md:text-9xl font-bold tracking-wider bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent"
              style={{ 
                fontFamily: "'Montserrat', sans-serif",
                textShadow: '0 0 20px rgba(255,255,255,0.2)'
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              Anniversary
            </motion.span>
            <motion.div
              className="absolute -inset-8 -z-10"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="w-full h-full rounded-full bg-gradient-to-r from-pink-500 to-purple-600 blur-xl" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{
                opacity: 0,
                scale: 0,
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
                y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
                rotate: 360,
              }}
              transition={{
                duration: Math.random() * 2 + 1,
                delay: Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Sparkles 
                className="text-purple-500/50" 
                size={Math.random() * 15 + 5}
                style={{ filter: 'blur(1px)' }}
              />
            </motion.div>
          ))}
        </div>

        {/* Enter Message */}
        {!isAnimating && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute bottom-10 left-0 right-0 text-center"
          >
            <motion.span 
              className="inline-block text-xl tracking-widest font-light bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              新しい物語の始まりへ...
            </motion.span>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default SplashScreen;