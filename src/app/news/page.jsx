import { promises as fs } from 'fs';
import path from 'path';
import { NewsClient } from './news-client';

export const metadata = {
  title: 'News',
  description: 'Latest news and updates from the world of cricket.',
};

async function getNews() {
  const filePath = path.join(process.cwd(), 'src', 'data', 'news.json');
  const fileData = await fs.readFile(filePath, 'utf8');
  const data = JSON.parse(fileData);
  return data.articles;
}

export default async function NewsPage() {
  const articles = await getNews();

  return <NewsClient articles={articles} />;
}
