import Image from 'next/image';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const ScoreCard = ({ match, team1, team2 }) => {
  return (
    <div>
      <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl bg-card">
        <CardContent className="flex-grow p-6 flex flex-col justify-center items-center text-center">
            <div className="flex items-center justify-center -space-x-4 mb-6">
                <Avatar className="h-20 w-20 border-4 border-background">
                    <AvatarImage src={team1.logo} alt={team1.name} data-ai-hint={team1.dataAiHint} />
                    <AvatarFallback>{team1.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <Avatar className="h-20 w-20 border-4 border-background">
                    <AvatarImage src={team2.logo} alt={team2.name} data-ai-hint={team2.dataAiHint} />
                    <AvatarFallback>{team2.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
            </div>
            
            <h3 className="font-bold text-lg mb-2">{team1.name} vs {team2.name}</h3>

            <div className="text-3xl font-bold text-primary my-2 space-x-4">
              <span>{match.team1Score || '-'}</span>
              <span className="text-muted-foreground">vs</span>
              <span>{match.team2Score || '-'}</span>
            </div>

            <div className="text-sm font-semibold text-muted-foreground mt-2 px-4">{match.matchTime}</div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ScoreCard;
