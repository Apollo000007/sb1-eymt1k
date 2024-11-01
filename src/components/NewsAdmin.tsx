import React, { useState } from 'react';
import { createNews } from '../lib/db';

function NewsAdmin() {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    content: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createNews(formData);
      setFormData({ title: '', category: '', content: '' });
      alert('ニュースを投稿しました！');
    } catch (error) {
      console.error('Error posting news:', error);
      alert('投稿に失敗しました。');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-900 rounded-lg">
      <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
        ニュース投稿
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-300 mb-2">タイトル</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full px-4 py-2 bg-gray-800 rounded border border-gray-700 focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-2">カテゴリー</label>
          <select
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="w-full px-4 py-2 bg-gray-800 rounded border border-gray-700 focus:ring-2 focus:ring-orange-500"
            required
          >
            <option value="">選択してください</option>
            <option value="ドラマ">ドラマ</option>
            <option value="映画">映画</option>
            <option value="音楽">音楽</option>
            <option value="イベント">イベント</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-300 mb-2">内容</label>
          <textarea
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            className="w-full px-4 py-2 bg-gray-800 rounded border border-gray-700 focus:ring-2 focus:ring-orange-500"
            rows={5}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-orange-500 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity"
        >
          投稿する
        </button>
      </form>
    </div>
  );
}

export default NewsAdmin;