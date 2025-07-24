
'use client';

import * as React from 'react';
import { Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <div className="hidden md:block">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme('light')}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('dark')}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('system')}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="grid grid-cols-3 gap-2 rounded-lg bg-muted p-1 md:hidden">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setTheme('light')}
          className={cn(
            'flex items-center gap-2 justify-center',
            theme === 'light' && 'bg-background text-foreground shadow-sm'
          )}
        >
            <Sun className="h-5 w-5" />
            Light
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setTheme('dark')}
          className={cn(
            'flex items-center gap-2 justify-center',
            theme === 'dark' && 'bg-background text-foreground shadow-sm'
          )}
        >
            <Moon className="h-5 w-5" />
            Dark
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setTheme('system')}
          className={cn(
            'flex items-center gap-2 justify-center',
            theme === 'system' && 'bg-background text-foreground shadow-sm'
          )}
        >
            <Monitor className="h-5 w-5" />
            System
        </Button>
      </div>
    </>
  );
}
