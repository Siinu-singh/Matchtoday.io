
'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqItems = [
    {
        question: "Is MatchToday free to use?",
        answer: "Yes, MatchToday is completely free. It's free for live scores, match stats and various other features."
    },
    {
        question: "Does MatchToday offer updates for international tournaments?",
        answer: "Definitely. We offer updates from domestic and international tournaments (World Cup, Premier League, IPL, etc.)."
    },
    {
        question: "Can I follow specific players or teams?",
        answer: "Yes, you can follow players and teams on MatchToday for tailored and specific updates and performance comparisons."
    },
    {
        question: "How often does MatchToday update the scores?",
        answer: "Scores are updated in real time. So you’re always getting accurate, up-to-the-minute information without a delay."
    },
    {
        question: "Does MatchToday provide just scores beyond this?",
        answer: "Yes. We provide live scores, statistics, expert analysis, and articles so you have a complete sports experience."
    }
]

const ContentSection = () => {
  return (
    <section className="w-full py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="prose prose-lg dark:prose-invert mx-auto">
          <h2 className="text-3xl font-bold font-headline text-center mb-4">
           Live Scores, Updates and Commentary
          </h2>
          <p className="text-center text-muted-foreground">
           Welcome to the Live section of MatchToday, the best place to follow all live cricket action from around the globe. This page provides a constantly updated and continuously changing feed giving you ball-by-ball, real-time updates from live matches.
          </p>
         
          <div className="space-y-12 mt-16">
            <div>
              <h3 className="font-bold text-2xl font-headline">Real-Time Match Updates</h3>
              <p>Even if it is an international test match, T20 leagues, domestic tournaments or anything in between, MatchToday provides comprehensive live updates on all cricket that is currently taking place. Our live tracking lets you follow every ball, run, and wicket as it happens. The scoreboard refreshes just enough to keep you in the game, no matter where you are.</p>
            </div>

            <div>
              <h3 className="font-bold text-2xl font-headline">Live Commentary and Insights</h3>
              <p>MatchToday Live is so much more than just a score. Our commentary section provides brief and informative text updates highlighting key moments of the match. You will also get expert insights, team strategies and performance analysis during the match. Commentary gives fans an understanding of where the game is at and the moments that will prove critical.</p>
            </div>
            
            <div>
              <h3 className="font-bold text-2xl font-headline">Mobile-Friendly and Always Available</h3>
              <p>No matter where you are - at home, at work, or on the move, the Live page of MatchToday is tailored for any device. You can view live scores and updates on a mobile device, tablet, or even your desktop with a seamless experience and a rapid load time.</p>
            </div>

            <div>
              <h3 className="font-bold text-2xl font-headline">Stay informed with notifications.</h3>
              <p>By enabling live notification, we can push you alerts with the key moments of the match, such as boundaries, wickets, and milestones. This feature is dedicated to the fans who want all the updates live, without refreshing the page.</p>
            </div>
            
            <div>
                <h3 className="font-bold text-2xl font-headline">The Source, for every form of the game</h3>
                <p>Even if it is a test that matters or the last overs of a T20 match, the Live section of MatchToday has full access to the action. We will cover men's and women's games, international tournaments and franchise leagues. All here.</p>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-bold font-headline text-center mb-8">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                     <AccordionItem value={`item-${index+1}`} key={index}>
                        <AccordionTrigger className="text-lg text-left hover:no-underline">{item.question}</AccordionTrigger>
                        <AccordionContent className="text-base text-muted-foreground">
                            {item.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
