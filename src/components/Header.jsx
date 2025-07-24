import Link from 'next/link';
import Logo from './Logo';
import { ThemeSwitcher } from './theme-switcher';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { Menu, Home, Shield, Newspaper, Users } from 'lucide-react';
import { Separator } from './ui/separator';

const Header = () => {
  const navLinks = [
    { href: '/', label: 'Live', icon: Home },
    { href: '/teams', label: 'Teams', icon: Shield },
    { href: '/news', label: 'News', icon: Newspaper },
    { href: '/players',label: 'Players', icon: Users },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-20 items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center space-x-2">
            <Logo />
            <span className="font-bold text-lg">MatchToday</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link key={link.href + link.label} href={link.href} className="transition-colors text-muted-foreground hover:text-primary">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="flex items-center space-x-2">
            <div className="hidden md:block">
              <ThemeSwitcher />
            </div>
            <Button asChild variant="default" className="rounded-full hidden md:inline-flex">
                <Link href="/#matches" className="flex items-center">
                   <span className="relative flex h-3 w-3 mr-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                    Live
                </Link>
            </Button>
            <div className="md:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Open menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="flex flex-col p-0">
                        <SheetHeader className="text-left border-b p-6">
                           <SheetTitle>
                                <Link href="/" className="flex items-center space-x-2">
                                    <Logo />
                                    <span className="font-bold text-lg">MatchToday</span>
                                </Link>
                           </SheetTitle>
                           <SheetDescription className="sr-only">
                                Main navigation menu.
                           </SheetDescription>
                        </SheetHeader>
                        <div className="flex flex-col h-full">
                            <nav className="flex flex-col space-y-1 p-4 text-base">
                                {navLinks.map((link) => (
                                <Link key={link.href + link.label} href={link.href} className="flex items-center gap-3 rounded-lg px-3 py-3 transition-colors text-muted-foreground hover:bg-muted hover:text-primary">
                                    <link.icon className="h-5 w-5" />
                                    <span className="font-medium">{link.label}</span>
                                </Link>
                                ))}
                            </nav>
                            <div className="mt-auto p-4 space-y-4 border-t">
                                <Button asChild variant="default" className="rounded-full w-full text-base py-6">
                                    <Link href="/#matches" className="flex items-center">
                                       <span className="relative flex h-3 w-3 mr-2">
                                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                                        </span>
                                        Live Matches
                                    </Link>
                                </Button>
                                <div className="pt-2">
                                    <p className="text-sm text-muted-foreground mb-2 px-2">Switch Theme</p>
                                    <ThemeSwitcher />
                                </div>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
