'use client';

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        <h1 className="text-6xl font-bold text-primary font-headline tracking-tighter">404</h1>
      </motion.div>
      <motion.h2 
        className="mt-4 text-2xl font-semibold"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Page Not Found
      </motion.h2>
      <motion.p 
        className="mt-2 text-muted-foreground"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Sorry, we couldn't find the page you're looking for.
      </motion.p>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Button asChild className="mt-6">
          <Link href="/">Go back home</Link>
        </Button>
      </motion.div>
    </div>
  )
}
