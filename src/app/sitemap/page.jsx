
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata = {
  title: 'Sitemap',
  description: 'A complete sitemap of MatchToday.io for easy navigation.',
  alternates: {
    canonical: '/sitemap',
  },
};

const links = [
  { href: '/', label: 'Home / Live' },
  { href: '/teams', label: 'Teams' },
  { href: '/news', label: 'News' },
  { href: '/players', label: 'Players' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
  { href: '/terms', label: 'Terms and Conditions' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
];

export default function SitemapPage() {
  return (
    <div className="max-w-2xl mx-auto py-16 px-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold font-headline">Sitemap</CardTitle>
          <p className="text-muted-foreground">Find your way around MatchToday.io</p>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>
                  <div className="block p-4 rounded-lg bg-card hover:bg-muted/50 transition-colors border">
                    <span className="text-lg font-semibold text-primary">{link.label}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
