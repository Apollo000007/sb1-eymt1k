// Use a simplified data structure for browser environment
interface NewsItem {
  id: number;
  date: string;
  title: string;
  category: string;
  content: string;
}

// In-memory storage for demo purposes
let newsStorage: NewsItem[] = [];
let nextId = 1;

export async function createNews(data: {
  title: string;
  category: string;
  content: string;
}) {
  const newsItem = {
    id: nextId++,
    date: new Date().toISOString(),
    title: data.title,
    category: data.category,
    content: data.content
  };
  newsStorage.push(newsItem);
  return newsItem;
}

export async function getNews() {
  return [...newsStorage].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function createContact(data: {
  name: string;
  email: string;
  message: string;
}) {
  return createNews({
    title: `Contact from ${data.name}`,
    category: 'contact',
    content: `Email: ${data.email}\n\n${data.message}`
  });
}

export async function createAudition(data: {
  name: string;
  furigana: string;
  email: string;
  phone: string;
  birthdate: string;
  gender: string;
  category: string;
  experience: string;
  message: string;
}) {
  return createNews({
    title: `Audition from ${data.name}`,
    category: 'audition',
    content: `
      フリガナ: ${data.furigana}
      メール: ${data.email}
      電話: ${data.phone}
      生年月日: ${data.birthdate}
      性別: ${data.gender}
      希望カテゴリー: ${data.category}
      経験・実績: ${data.experience}
      志望動機: ${data.message}
    `
  });
}