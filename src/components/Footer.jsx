
import Link from 'next/link';
import Logo from './Logo';
import { Button } from './ui/button';
import { Input } from './ui/input';

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
             <div className="flex items-center space-x-2 mb-4">
                <Logo />
                <span className="text-lg font-bold">MatchToday</span>
            </div>
            <p className="text-muted-foreground mb-4">Join our newsletter to stay up to date on the world of cricket.</p>
            <form className="flex w-full max-w-sm items-center space-x-2">
                <Input type="email" placeholder="Enter your email" className="bg-background"/>
                <Button type="submit" variant="outline">Subscribe</Button>
            </form>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Matches</h4>
            <nav className="flex flex-col space-y-2 text-muted-foreground">
                <Link href="/" className="hover:text-primary transition-colors">Live</Link>
                <Link href="/" className="hover:text-primary transition-colors">Upcoming</Link>
                <Link href="/" className="hover:text-primary transition-colors">Results</Link>
            </nav>
          </div>
          <div>
             <h4 className="font-semibold mb-4">Company</h4>
            <nav className="flex flex-col space-y-2 text-muted-foreground">
                <Link href="/about" className="hover:text-primary transition-colors">About</Link>
                <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
                <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
            </nav>
          </div>
           <div>
             <h4 className="font-semibold mb-4">Resources</h4>
            <nav className="flex flex-col space-y-2 text-muted-foreground">
                <Link href="/sitemap" className="hover:text-primary transition-colors">Sitemap</Link>
                <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                 <Link href="/news" className="hover:text-primary transition-colors">Blog</Link>
            </nav>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} MatchToday.io. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
                <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
