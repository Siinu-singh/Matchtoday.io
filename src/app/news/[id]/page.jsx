
import { promises as fs } from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Calendar, Tag, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { SimilarNews } from './similar-news';

async function getArticles() {
  const filePath = path.join(process.cwd(), 'src', 'data', 'news.json');
  const fileData = await fs.readFile(filePath, 'utf8');
  const data = JSON.parse(fileData);
  return data.articles;
}

export async function generateStaticParams() {
  const articles = await getArticles();
 
  return articles.map((article) => ({
    id: article.id.toString(),
  }));
}

export async function generateMetadata({ params }) {
  const articles = await getArticles();
  const article = articles.find(article => article.id === parseInt(params.id));

  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
    alternates: {
        canonical: `/news/${article.id}`,
    },
  };
}

export default async function NewsArticlePage({ params }) {
  const articles = await getArticles();
  const article = articles.find(article => article.id === parseInt(params.id));

  if (!article) {
    notFound();
  }
  
  const similarArticles = articles.filter(a => a.id !== article.id);

  // Handle both escaped and literal newlines
  const paragraphs = article.content.split(/\n|\\n/).filter(p => p.trim() !== '');

  return (
    <div className="bg-background">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 max-w-7xl">
            <article className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <Button asChild variant="outline" className="rounded-full">
                        <Link href="/news" className="inline-flex items-center gap-2">
                            <ArrowLeft className="h-4 w-4" />
                            Back to News
                        </Link>
                    </Button>
                </div>

                <header className="mb-8">
                    <div className="relative w-full h-auto aspect-[2/1] rounded-2xl overflow-hidden mb-8 shadow-lg">
                        <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            style={{ objectFit: 'cover' }}
                            data-ai-hint={article.dataAiHint}
                            priority
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <span className="bg-primary/10 text-primary px-3 py-1 text-sm font-semibold rounded-full">{article.category}</span>
                            <div className="flex items-center gap-2 text-muted-foreground text-sm">
                                <Calendar className="h-4 w-4" />
                                <span>{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                            </div>
                        </div>
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
                            {article.title}
                        </h1>
                         <p className="font-semibold text-xl text-muted-foreground">{article.excerpt}</p>
                    </div>
                </header>
                
                <Separator className="my-8" />

                <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/90 leading-relaxed">
                    {paragraphs.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
            </article>

            <Separator className="my-16" />

            <section>
                <h2 className="text-3xl font-bold text-center mb-12 font-headline">More News</h2>
                <SimilarNews articles={similarArticles} />
            </section>
        </div>
    </div>
  );
}
