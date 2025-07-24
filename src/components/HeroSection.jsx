
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowDown, ArrowRight, ChevronRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import * as React from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },
};

const HeroSection = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 4000, stopOnInteraction: true })
    );

  return (
    <section 
      className="w-full bg-background pt-16 pb-20 md:pt-24 md:pb-28 flex flex-col justify-center relative"
      style={{ minHeight: 'calc(100vh - 80px)' }} // 80px is header height
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-extrabold tracking-tighter sm:text-6xl md:text-7xl font-headline"
          >
            Where Cricket Scores Are Built.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-xl mx-auto text-lg text-muted-foreground"
          >
            We bring ideas to life by combining years of experience from our very talented team.
          </motion.p>

          <motion.div 
            variants={itemVariants} 
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <Button asChild size="lg" className="rounded-full">
              <a href="#matches">
                View Matches <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="ghost">
                <a href="/contact">
                    Contact us <ChevronRight className="ml-2 h-5 w-5" />
                </a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-12 lg:mt-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="relative w-full max-w-6xl mx-auto">
            <Carousel
                plugins={[plugin.current]}
                className="w-full"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent>
                    {/* Slide 1: Single Image */}
                    <CarouselItem>
                         <div className="relative w-full h-auto aspect-[2.4/1] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                            src="https://images.unsplash.com/photo-1607734834519-d8576ae60ea6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxjcmlja2V0JTIwc3RhZGl1bXxlbnwwfHx8fDE3NTI2NDkzMDl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                            alt="Cricket stadium"
                            fill
                            style={{objectFit: 'cover'}}
                            className="z-0"
                            data-ai-hint="cricket stadium"
                            priority
                            />
                        </div>
                    </CarouselItem>
                    {/* Slide 2: 1 Large, 2 Small */}
                    <CarouselItem>
                        <div className="grid grid-cols-3 grid-rows-2 gap-2 aspect-[2.4/1] rounded-lg overflow-hidden">
                            <div className="col-span-2 row-span-2 relative rounded-lg overflow-hidden">
                                <Image src="https://images.unsplash.com/photo-1726867911836-a263695ab6c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxjcmlja2V0JTIwYWN0aW9ufGVufDB8fHx8MTc1MjY0OTMwOHww&ixlib=rb-4.1.0&q=80&w=1080" alt="Cricket action 1" fill style={{objectFit: 'cover'}} data-ai-hint="cricket action" />
                            </div>
                            <div className="relative rounded-lg overflow-hidden">
                                <Image src="https://images.unsplash.com/photo-1624897174291-1bd715e371d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwY2VsZWJyYXRpb258ZW58MHx8fHwxNzUyNjQ5MzA5fDA&ixlib=rb-4.1.0&q=80&w=1080" alt="Cricket action 2" fill style={{objectFit: 'cover'}} data-ai-hint="cricket celebration" />
                            </div>
                             <div className="relative rounded-lg overflow-hidden">
                                <Image src="https://images.unsplash.com/photo-1565787154274-c8d076ad34e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxjcmlja2V0JTIwcGxheWVyfGVufDB8fHx8MTc1MjY0OTMwOHww&ixlib=rb-4.1.0&q=80&w=1080" alt="Cricket action 3" fill style={{objectFit: 'cover'}} data-ai-hint="cricket player" />
                            </div>
                        </div>
                    </CarouselItem>
                    {/* Slide 3: Triptych */}
                    <CarouselItem>
                        <div className="grid grid-cols-3 gap-2 aspect-[2.4/1] rounded-lg overflow-hidden">
                            <div className="relative rounded-lg overflow-hidden">
                                <Image src="https://images.unsplash.com/photo-1665822813956-3041e7ee0f48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjYW1lcmFtYW4lMjBzcG9ydHN8ZW58MHx8fHwxNzUyNzM2MTU3fDA&ixlib=rb-4.1.0&q=80&w=1080" alt="Cameraman filming cricket" fill style={{objectFit: 'cover'}} data-ai-hint="cameraman sports" />
                            </div>
                            <div className="relative rounded-lg overflow-hidden">
                                <Image src="https://images.unsplash.com/photo-1745180266685-939a99b553fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxjcmlja2V0JTIwdG91cm5hbWVudHxlbnwwfHx8fDE3NTI2NTAyNjB8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="Cricket tournament trophy" fill style={{objectFit: 'cover'}} data-ai-hint="cricket tournament" />
                            </div>
                            <div className="relative rounded-lg overflow-hidden">
                                <Image src="https://images.unsplash.com/photo-1583072728920-4ed8c72cbc01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxjcmlja2V0JTIwZmFuc3xlbnwwfHx8fDE3NTI3MzYxNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="Cricket fans cheering" fill style={{objectFit: 'cover'}} data-ai-hint="cricket fans" />
                            </div>
                        </div>
                    </CarouselItem>
                     {/* Slide 4: 2 Large horizontal */}
                    <CarouselItem>
                        <div className="grid grid-rows-2 gap-2 aspect-[2.4/1] rounded-lg overflow-hidden">
                            <div className="relative rounded-lg overflow-hidden">
                                <Image src="https://images.unsplash.com/photo-1709134800935-d00e89d5b8e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxjcmlja2V0JTIwYWN0aW9ufGVufDB8fHx8MTc1MjY0OTMwOHww&ixlib=rb-4.1.0&q=80&w=1080" alt="Dramatic cricket action shot" fill style={{objectFit: 'cover'}} data-ai-hint="cricket action" />
                            </div>
                            <div className="relative rounded-lg overflow-hidden">
                                <Image src="https://images.unsplash.com/photo-1685541000847-f764510e2175?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxjYW1lcmFtYW4lMjBjcmlja2V0fGVufDB8fHx8MTc1MjczNjE1Nnww&ixlib=rb-4.1.0&q=80&w=1080" alt="Cricket match on TV" fill style={{objectFit: 'cover'}} data-ai-hint="cameraman cricket" />
                            </div>
                        </div>
                    </CarouselItem>
                     {/* Slide 5: Masonry */}
                    <CarouselItem>
                        <div className="grid grid-cols-4 grid-rows-2 gap-2 aspect-[2.4/1] rounded-lg overflow-hidden">
                             <div className="col-span-2 row-span-2 relative rounded-lg overflow-hidden">
                                <Image src="https://images.unsplash.com/photo-1695918425489-6c56df5eff9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxhdGhsZXRlJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzUyNjQ4MDExfDA&ixlib=rb-4.1.0&q=80&w=1080" alt="Athlete portrait" fill style={{objectFit: 'cover'}} data-ai-hint="athlete portrait" />
                            </div>
                            <div className="col-span-2 relative rounded-lg overflow-hidden">
                                <Image src="https://images.unsplash.com/photo-1743342873510-55d49972b746?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxjcmlja2V0JTIwbmV3c3xlbnwwfHx8fDE3NTI2NTAyNjB8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="Cricket news article" fill style={{objectFit: 'cover'}} data-ai-hint="cricket news" />
                            </div>
                             <div className="relative rounded-lg overflow-hidden">
                                <Image src="https://images.unsplash.com/photo-1695918427978-c7add5d96333?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxhdGhsZXRlJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzUyNjQ4MDExfDA&ixlib=rb-4.1.0&q=80&w=1080" alt="Another athlete" fill style={{objectFit: 'cover'}} data-ai-hint="athlete portrait" />
                            </div>
                            <div className="relative rounded-lg overflow-hidden">
                                <Image src="https://images.unsplash.com/photo-1695918425283-eb385c012b7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxhdGhsZXRlJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzUyNjQ4MDExfDA&ixlib=rb-4.1.0&q=80&w=1080" alt="Third athlete" fill style={{objectFit: 'cover'}} data-ai-hint="athlete portrait" />
                            </div>
                        </div>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
          </div>
        </motion.div>
      </div>
      <motion.a 
        href="#matches"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", repeatDelay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
      >
        <span className="text-sm font-medium text-muted-foreground">Scroll Down</span>
        <div className="relative h-8 w-px bg-muted-foreground">
            <motion.div 
                 className="absolute top-0 left-0 h-2 w-px bg-foreground"
                 initial={{ y: 0 }}
                 animate={{ y: [0, 24, 0] }}
                 transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
        </div>
        <ArrowDown className="w-5 h-5 text-muted-foreground" />
      </motion.a>
    </section>
  );
};

export default HeroSection;
