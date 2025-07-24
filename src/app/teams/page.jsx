import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { promises as fs } from 'fs';
import path from 'path';
import { CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'Cricket Teams - International & Domestic Teams | MatchToday',
  description: 'Discover detailed profiles of cricket teams in all formats on MatchToday. Get information on squads, match history, rankings, and upcoming fixtures for international and domestic teams.',
};

async function getTeams() {
  const filePath = path.join(process.cwd(), 'src', 'data', 'teams.json');
  const fileData = await fs.readFile(filePath, 'utf8');
  const data = JSON.parse(fileData);
  return data.teams;
}

const features = [
    { title: "Team Info and Squad Details", description: "Get the latest on team form, upcoming fixtures, player roles, and coaching staff." },
    { title: "Head to Head and Rivalries", description: "Explore iconic rivalries with historical data and matchup analysis." },
    { title: "Accurate & Timely Coverage", description: "We provide verified news, injury updates, and official team communications." }
]

export default async function TeamsPage() {
  const teams = await getTeams();

  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Discover Cricket Teams from Around the World</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Welcome to the teams section of MatchToday. This page provides you with all your updates on cricket teams in all formats and levels. Even if it's the international giants or a developing nation, find out how every team contributes to the cricket community.
        </p>
      </header>

      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {features.map(feature => (
                 <div key={feature.title} className="bg-card p-6 rounded-lg border">
                    <CheckCircle className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold font-headline mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                 </div>
            ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12 font-headline">Meet the Teams</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teams.map((team) => (
            <Card key={team.id} className="text-center hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                <Avatar className="mx-auto h-24 w-24 mb-4 border-4 border-background">
                    <AvatarImage src={team.logo} alt={team.name} data-ai-hint={team.dataAiHint} />
                    <AvatarFallback>{team.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <CardTitle className="font-headline">{team.name}</CardTitle>
                </CardHeader>
                <CardContent>
                <p className="text-muted-foreground">
                    <strong>Captain:</strong> {team.captain}
                </p>
                <p className="text-muted-foreground">
                    <strong>Home Ground:</strong> {team.home_ground}
                </p>
                </CardContent>
            </Card>
            ))}
        </div>
      </section>

       <section className="bg-card border rounded-lg p-8 lg:p-12">
            <h2 className="text-3xl font-bold font-headline text-center mb-8">All Teams, One Place</h2>
            <div className="max-w-4xl mx-auto text-muted-foreground space-y-4 text-center">
                <p>
                    At MatchToday, it is easy to keep track of all the teams of cricket teams in one location. You can dig deep into squad profiles, form trends, and tournament prep reports. Even if you are a supporter of just one team, we try to ensure that you have some motivation to explore a bunch of other teams.
                </p>
                <p className="font-semibold text-foreground">
                    Start your journey into cricket with the teams that bring the game to life.
                </p>
            </div>
      </section>
    </div>
  );
}
