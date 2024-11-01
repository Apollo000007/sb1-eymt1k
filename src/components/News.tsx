import React from 'react';
import { Link } from 'react-router-dom';
import { newsItems } from '../data/newsData';

interface NewsItem {
  id: number;
  date: string;
  title: string;
  category: string;
}

const News = () => {
  // Display only the first 3 news items on the top page
  const recentNews = newsItems.slice(0, 3);

  return (
    <section id="news" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
          ニュース
        </h2>

        <div className="space-y-6">
          {recentNews.map((item) => (
            <Link
              key={item.id}
              to={`/news/${item.id}`}
              className="block group bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-gray-400">{item.date}</span>
                  <span className="px-3 py-1 rounded-full text-sm bg-gradient-to-r from-pink-500 to-violet-500 text-white">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-lg text-white group-hover:text-pink-400 transition-colors duration-300">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/news"
            className="inline-block bg-gradient-to-r from-pink-500 to-violet-500 text-white px-8 py-3 rounded-full hover:scale-105 transition-transform duration-200"
          >
            ニュース一覧
          </Link>
        </div>
      </div>
    </section>
  );
};

export default News;