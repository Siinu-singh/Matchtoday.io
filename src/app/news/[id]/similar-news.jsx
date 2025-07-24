
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Newspaper } from 'lucide-react';

const INITIAL_VISIBLE_COUNT = 4;

export function SimilarNews({ articles }) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  const visibleArticles = articles.slice(0, visibleCount);

  if (articles.length === 0) {
    return (
        <div className="text-center py-20 bg-muted rounded-lg">
            <Newspaper className="mx-auto h-12 w-12 text-muted-foreground" />
            <h3 className="mt-4 text-lg font-semibold">No Similar Articles Found</h3>
            <p className="mt-2 text-sm text-muted-foreground">There are no other articles to display.</p>
        </div>
    );
  }

  return (
    <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {visibleArticles.map((article) => (
            <Card key={article.id} className="group overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <Link href={`/news/${article.id}`} className="block overflow-hidden">
                    <div className="relative w-full h-56">
                        <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        style={{objectFit: 'cover'}}
                        data-ai-hint={article.dataAiHint}
                        className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                </Link>
                <CardHeader>
                <CardDescription>{article.category.toUpperCase()}</CardDescription>
                <CardTitle className="font-headline text-xl">
                    <Link href={`/news/${article.id}`} className="line-clamp-3 hover:text-primary transition-colors">{article.title}</Link>
                </CardTitle>
                <CardDescription>{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                <p className="text-muted-foreground line-clamp-3">{article.excerpt}</p>
                </CardContent>
            </Card>
            ))}
        </div>

      {visibleCount < articles.length && (
        <div className="mt-12 text-center">
          <Button onClick={() => setVisibleCount(prev => prev + INITIAL_VISIBLE_COUNT)}>
            Load More
          </Button>
        </div>
      )}
    </div>
  );
}
