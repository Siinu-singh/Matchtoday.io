
import { promises as fs } from 'fs';
import path from 'path';

const URL = "https://matchtoday.io";

export default async function sitemap() {
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

  // Dynamic pages (e.g., from a data source)
  const matchesFilePath = path.join(process.cwd(), 'src', 'data', 'matches.json');
  const matchesFileContents = await fs.readFile(matchesFilePath, 'utf8');
  const matches = JSON.parse(matchesFileContents);
  
  // Note: We are assuming a route like /matches/[id] exists for these.
  // Since it doesn't, this is for demonstration of dynamic sitemap generation.
  const dynamicPages = matches.map((match) => ({
    url: `${URL}/matches/${match.id}`,
    lastModified: new Date(),
  }));

  return [...staticPages, ...dynamicPages];
}
