
'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import Link from 'next/link';
import { Search, Calendar as CalendarIcon, FilterX, Newspaper } from 'lucide-react';
import { format } from 'date-fns';

const INITIAL_VISIBLE_COUNT = 6;
const CATEGORIES = ["Matches", "Players", "Teams", "Announcements"];

export function NewsClient({ articles }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [dateRange, setDateRange] = useState(undefined);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  const filteredArticles = useMemo(() => {
    return articles
      .filter(article => {
        const articleDate = new Date(article.date);
        const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) || article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(article.category);
        const matchesDate = !dateRange || (articleDate >= (dateRange.from || new Date(0)) && articleDate <= (dateRange.to || new Date()));
        return matchesSearch && matchesCategory && matchesDate;
      })
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [articles, searchTerm, selectedCategories, dateRange]);

  const handleCategoryChange = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategories([]);
    setDateRange(undefined);
  };
  
  const hasActiveFilters = searchTerm || selectedCategories.length > 0 || dateRange;

  const visibleArticles = filteredArticles.slice(0, visibleCount);

  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Cricket News</h1>
        <p className="mt-4 text-lg text-muted-foreground">Your source for the latest stories and updates.</p>
      </header>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Filters Sidebar */}
        <aside className="w-full md:w-1/4 lg:w-1/5 space-y-8 md:sticky top-24 self-start">
          <h2 className="text-2xl font-bold font-headline">Filters</h2>
          
          {/* Search Filter */}
          <div className="space-y-2">
            <Label htmlFor="search">Search</Label>
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                    id="search" 
                    placeholder="Search articles..."
                    className="pl-10" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
          </div>

          {/* Category Filter */}
          <div className="space-y-4">
            <h3 className="font-semibold">Categories</h3>
            {CATEGORIES.map(category => (
                <div key={category} className="flex items-center space-x-2">
                    <Checkbox 
                        id={category} 
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={() => handleCategoryChange(category)}
                    />
                    <Label htmlFor={category} className="font-normal">{category}</Label>
                </div>
            ))}
          </div>

          {/* Date Range Filter */}
           <div className="space-y-2">
            <h3 className="font-semibold">Date Range</h3>
             <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="date"
                  variant={"outline"}
                  className="w-full justify-start text-left font-normal"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {dateRange?.from ? (
                    dateRange.to ? (
                      <>
                        {format(dateRange.from, "LLL dd, y")} -{" "}
                        {format(dateRange.to, "LLL dd, y")}
                      </>
                    ) : (
                      format(dateRange.from, "LLL dd, y")
                    )
                  ) : (
                    <span>Pick a date range</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={dateRange?.from}
                  selected={dateRange}
                  onSelect={setDateRange}
                  numberOfMonths={2}
                />
              </PopoverContent>
            </Popover>
          </div>
          
          {hasActiveFilters && (
             <Button variant="ghost" onClick={clearFilters} className="w-full">
                <FilterX className="mr-2 h-4 w-4" />
                Clear Filters
            </Button>
          )}

        </aside>

        {/* News Grid */}
        <main className="w-full md:w-3/4 lg:w-4/5">
            {visibleArticles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {visibleArticles.map((article) => (
                    <Card key={article.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
                        <Link href={`/news/${article.id}`}>
                            <div className="relative w-full h-56">
                                <Image
                                src={article.image}
                                alt={article.title}
                                fill
                                style={{objectFit: 'cover'}}
                                data-ai-hint={article.dataAiHint}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                        </Link>
                        <CardHeader>
                        <CardDescription>{article.category.toUpperCase()}</CardDescription>
                        <CardTitle className="font-headline text-xl h-20">
                            <Link href={`/news/${article.id}`}>{article.title}</Link>
                        </CardTitle>
                        <CardDescription>{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                        <p className="text-muted-foreground">{article.excerpt}</p>
                        </CardContent>
                    </Card>
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 bg-muted rounded-lg">
                    <Newspaper className="mx-auto h-12 w-12 text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-semibold">No Articles Found</h3>
                    <p className="mt-2 text-sm text-muted-foreground">Try adjusting your filters to find what you're looking for.</p>
                </div>
            )}


          {visibleCount < filteredArticles.length && (
            <div className="mt-12 text-center">
              <Button onClick={() => setVisibleCount(prev => prev + INITIAL_VISIBLE_COUNT)}>
                Load More
              </Button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
