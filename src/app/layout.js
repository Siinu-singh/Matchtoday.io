
import './globals.css';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: {
    default: 'Cricket Scores and Updates Live Now | MatchToday',
    template: '%s | MatchToday.io',
  },
  description: 'Get live cricket scores, ball-by-ball commentary and live match updates with real-time coverage of every single live match in all formats and tournaments on MatchToday.',
  keywords: ['live cricket scores', 'cricket match updates', 'sports scores', 'cricket'],
  robots: 'index, follow, noarchive, noodp',
  openGraph: {
    title: 'MatchToday.io',
    description: 'Get live cricket scores, ball-by-ball commentary and live match updates with real-time coverage of every single live match in all formats and tournaments on MatchToday.',
    type: 'website',
    locale: 'en_US',
    url: 'https://matchtoday.io',
    siteName: 'MatchToday.io',
  },
  icons: {
    icon: '/logo.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning style={{ scrollBehavior: 'smooth' }}>
      <body className={cn('font-sans antialiased', inter.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
