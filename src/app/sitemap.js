
import { promises as fs } from 'fs';
import path from 'path';

const URL = "https://matchtoday.io";

export default async function sitemap() {
  const matchesFilePath = path.join(process.cwd(), 'src', 'data', 'matches.json');
  const matchesFileContents = await fs.readFile(matchesFilePath, 'utf8');
  const matches = JSON.parse(matchesFileContents);

  const newsFilePath = path.join(process.cwd(), 'src', 'data', 'news.json');
  const newsFileContents = await fs.readFile(newsFilePath, 'utf8');
  const { articles: newsArticles } = JSON.parse(newsFileContents);
  
  // Static pages
  const staticPages = [
    { url: `${URL}/`, lastModified: new Date() },
    { url: `${URL}/about`, lastModified: new Date() },
    { url: `${URL}/contact`, lastModified: new Date() },
    { url: `${URL}/terms`, lastModified: new Date() },
    { url: `${URL}/privacy-policy`, lastModified: new Date() },
    { url: `${URL}/sitemap`, lastModified: new Date() },
    { url: `${URL}/teams`, lastModified: new Date() },
    { url: `${URL}/players`, lastModified: new Date() },
    { url: `${URL}/news`, lastModified: new Date() },
  ];

  // Dynamic match pages 
  const matchPages = matches.map((match) => ({
    url: `${URL}/matches/${match.id}`,
    lastModified: new Date(),
  }));

  // Dynamic news pages
  const newsPages = newsArticles.map((article) => ({
      url: `${URL}/news/${article.id}`,
      lastModified: new Date(article.date),
  }));

  return [...staticPages, ...matchPages, ...newsPages];
}
