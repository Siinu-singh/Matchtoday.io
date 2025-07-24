
'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const features = [
  {
    image: 'https://images.unsplash.com/photo-1726867911836-a263695ab6c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxjcmlja2V0JTIwYWN0aW9ufGVufDB8fHx8MTc1MjY0OTMwOHww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Live Ball-by-Ball Commentary',
    tag: 'Commentary',
    dataAiHint: 'cricket action',
  },
  {
    image: 'https://images.unsplash.com/photo-1726867911836-a263695ab6c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxjcmlja2V0JTIwYWN0aW9ufGVufDB8fHx8MTc1MjY0OTMwOHww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'In-depth Player Statistics',
    tag: 'Stats',
    dataAiHint: 'cricket action',
  },
  {
    image: 'https://images.unsplash.com/photo-1660978692407-a7863eebe395?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwYW5hbHlzaXN8ZW58MHx8fHwxNzUyNjUwMjU5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Expert Match Analysis',
    tag: 'Analysis',
    dataAiHint: 'cricket analysis',
  },
  {
    image: 'https://images.unsplash.com/flagged/photo-1580139624070-910f651c1b78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxzcG9ydHMlMjBoaWdobGlnaHRzfGVufDB8fHx8MTc1MjY1MDI1OXww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'HD Video Highlights',
    tag: 'Videos',
    dataAiHint: 'sports highlights',
  },
  {
    image: 'https://images.unsplash.com/photo-1743342398365-13f456c6649e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8Y3JpY2tldCUyMG5ld3N8ZW58MHx8fHwxNzUyNjUwMjYwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Latest Cricket News',
    tag: 'News',
    dataAiHint: 'cricket news',
  },
  {
    image: 'https://images.unsplash.com/photo-1745180267058-b9db9652b442?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxjcmlja2V0JTIwdG91cm5hbWVudHxlbnwwfHx8fDE3NTI2NTAyNjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Tournament Schedules',
    tag: 'Fixtures',
    dataAiHint: 'cricket tournament',
  },
  {
    image: 'https://images.unsplash.com/photo-1740818575251-a33159caf4c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwbGF5ZXIlMjByYW5raW5nc3xlbnwwfHx8fDE3NTI2NTAyNTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Official Player Rankings',
    tag: 'Rankings',
    dataAiHint: 'player rankings',
  },
  {
    image: 'https://images.unsplash.com/photo-1750716413341-fd5d93296a76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxjcmlja2V0JTIwZmFuc3xlbnwwfHx8fDE3NTI1ODIyNzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Interactive Fan Polls',
    tag: 'Community',
    dataAiHint: 'cricket fans',
  },
  {
    image: 'https://images.unsplash.com/photo-1703229702362-ae76aace387c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxjcmlja2V0JTIwYXJjaGl2ZXN8ZW58MHx8fHwxNzUyNjUwMjU5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Historical Match Archives',
    tag: 'Archives',
    dataAiHint: 'cricket archives',
  },
  {
    image: 'https://images.unsplash.com/photo-1685541001104-91fe7ae1d8e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8Y3JpY2tldCUyMHF1aXp8ZW58MHx8fHwxNzUyNjUwMjU5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Fantasy Cricket Leagues',
    tag: 'Fantasy',
    dataAiHint: 'cricket quiz',
  },
];

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
      delay: i * 0.2,
    },
  }),
};

const MotionCard = motion(Card);

const FeaturesSection = () => {
  return (
    <section className="w-full py-16 lg:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
            <motion.div
              className="max-w-xl"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tighter font-headline">
                Go Beyond the Score.
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Immerse yourself in the game with live commentary, detailed stats, and expert analysis.
              </p>
            </motion.div>
            <Button variant="outline" className="hidden md:inline-flex">
                View all features <ArrowRight className="ml-2 w-4 h-4"/>
            </Button>
        </div>

        <div className="md:px-12">
            <Carousel
            opts={{
                align: "start",
                loop: true,
            }}
            className="w-full"
            >
            <CarouselContent>
                {features.map((feature, i) => (
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                    <MotionCard
                        className="group h-96 rounded-2xl overflow-hidden relative"
                        custom={i}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={cardVariants}
                    >
                        <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        style={{objectFit: 'cover'}}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={feature.dataAiHint}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <CardContent className="relative z-10 p-6 flex flex-col h-full text-white justify-between">
                        <div>
                            <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium inline-block">{feature.tag}</div>
                        </div>
                        <div className="mt-auto">
                            <h3 className="text-xl font-bold font-headline">{feature.title}</h3>
                            <button className="mt-4 flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm text-white group-hover:bg-white/40 transition-colors">
                            <ArrowRight className="w-6 h-6" />
                            </button>
                        </div>
                        </CardContent>
                    </MotionCard>
                    </div>
                </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex"/>
            </Carousel>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
