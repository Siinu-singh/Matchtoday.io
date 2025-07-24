import ScoreCard from '@/components/ScoreCard';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import { promises as fs } from 'fs';
import path from 'path';
import ContentSection from '@/components/ContentSection';

async function getData() {
  const matchesPath = path.join(process.cwd(), 'src', 'data', 'matches.json');
  const teamsPath = path.join(process.cwd(), 'src', 'data', 'teams.json');

  const matchesFile = await fs.readFile(matchesPath, 'utf8');
  const teamsFile = await fs.readFile(teamsPath, 'utf8');

  const matches = JSON.parse(matchesFile);
  const { teams } = JSON.parse(teamsFile);
  
  return { matches, teams };
}


export default async function Home() {
  const { matches, teams } = await getData();

  const teamsMap = teams.reduce((acc, team) => {
    acc[team.id] = team;
    return acc;
  }, {});

  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeaturesSection />

      <section id="matches" className="w-full py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 font-headline">Today's Matches</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {matches.map((match) => (
              <ScoreCard
                key={match.id}
                match={match}
                team1={teamsMap[match.team1Id]}
                team2={teamsMap[match.team2Id]}
              />
            ))}
          </div>
        </div>
      </section>
      <ContentSection />
    </div>
  );
}
