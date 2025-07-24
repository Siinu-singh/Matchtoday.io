
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata = {
  title: 'More about MatchToday - Your reliable sports companion',
  description: 'Find out how MatchToday can keep you up to date with live match updates, player stats & professional sports segments in cricket, football, etc. More about our mission and our team.',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">About MatchToday</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          MatchToday was founded for a very simple reason - to bring sports fans closer to the game. Even if you are a passionate cricket lover, an avid football follower, or simply a sports enthusiast who enjoys existing with multiple sports, MatchToday is your go-to digital source for real-time match updates, player statistics, and expert sports content.
        </p>
      </header>
      
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Who We Are</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-4">
            <p>
              MatchToday is made up of a bunch of sports lovers, technology geeks and data analysts who want to provide reliable and fast updates for every game. Our goal is to provide an enhanced sports-watching experience for our users with features that go beyond a simple score - we deliver comprehensive statistics, schedules, head-to-head tracking, team performance graphs and expert commentary.
            </p>
            <p>
              MatchToday is built to keep you engaged - wherever you are. With a simple design and real-time updates, we help ensure that you never miss a key moment, stunning goal or match-winning wicket.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline">What We Provide</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-4">
            <ul className="list-disc list-inside space-y-2">
                <li><span className="font-semibold text-foreground">Live Match Coverage:</span> Quick, real-time scoring updates for cricket, football, and more.</li>
                <li><span className="font-semibold text-foreground">More Stats:</span> Stats from player performance through to ball-by-ball updates.</li>
                <li><span className="font-semibold text-foreground">News & Insights:</span> Articles written by professionals, team news, match previews.</li>
                <li><span className="font-semibold text-foreground">Personalised Experience:</span> You can follow the teams & players you are a fan of.</li>
                <li><span className="font-semibold text-foreground">Mobile Compatibility:</span> Access anytime and from any device.</li>
            </ul>
             <p>
              Even if it be the ICC World Cup, UEFA Champions League or your local league fixture, MatchToday will provide accurate coverage of it all to every sports fan.
            </p>
          </CardContent>
        </Card>

         <Card>
          <CardHeader>
            <CardTitle className="font-headline">Our Pledge</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-4">
            <p>
             We pledge to keep improving and innovating. Our staff are continually adding and further developing features. We innovate through continuous improvement to all our offerings. When making changes, we consider fans' input. The product will continue to play an important role in building a platform for fans that is both powerful and useful and enjoyable to interact with.
            </p>
            <p>
                Join thousands of other fans already using MatchToday to receive their daily sports updates. Sport is more than just games; it is experiencing every score, every stat and every story being played out in your sports life.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
