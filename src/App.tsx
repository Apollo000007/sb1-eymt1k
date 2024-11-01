import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Artists from './components/Artists';
import News from './components/News';
import Footer from './components/Footer';
import About from './pages/About';
import Creators from './pages/Creators';
import CreatorDetail from './pages/CreatorDetail';
import WorkRequest from './pages/WorkRequest';
import NewsList from './pages/NewsList';
import NewsDetail from './pages/NewsDetail';
import Dashboard from './pages/admin/Dashboard';
import Audition from './pages/Audition';
import ScrollToSection from './components/ScrollToSection';
import SplashScreen from './components/SplashScreen';

// メインのアプリケーションコンポーネント
function App() {
  // メニューの開閉状態を管理
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // スプラッシュスクリーンの表示状態を管理
  const [showSplash, setShowSplash] = useState(true);

  // スプラッシュスクリーンが表示中の場合はそれのみを表示
  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* ヘッダーナビゲーション */}
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <ScrollToSection />
      
      {/* メインコンテンツ */}
      <main className="relative">
        <AnimatePresence mode="wait">
          <Routes>
            {/* トップページ */}
            <Route path="/" element={
              <>
                <Hero />
                <Artists />
                <News />
              </>
            } />
            {/* 各ページへのルーティング */}
            <Route path="/about" element={<About />} />
            <Route path="/creators" element={<Creators />} />
            <Route path="/creator/:id" element={<CreatorDetail />} />
            <Route path="/work-request/:id" element={<WorkRequest />} />
            <Route path="/news" element={<NewsList />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/audition" element={<Audition />} />
          </Routes>
        </AnimatePresence>
      </main>
      
      {/* フッター */}
      <Footer />
    </div>
  );
}

export default App;