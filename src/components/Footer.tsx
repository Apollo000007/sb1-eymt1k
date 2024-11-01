import React from 'react';
import { Instagram, Twitter, Youtube } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* ロゴ */}
          <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent mb-6">
            Anniversary
          </h2>

          {/* SNSリンク */}
          <div className="flex space-x-6 mb-8">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              <Youtube size={24} />
            </a>
          </div>

          {/* 会社情報 */}
          <div className="text-center text-gray-400 text-sm">
            <p className="mb-2">〒123-4567 東京都渋谷区代々木1-2-3</p>
            <p className="mb-4">TEL: 03-1234-5678</p>
            <p>© 2024 Anniversary Entertainment. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;