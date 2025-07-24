
import { promises as fs } from 'fs';
import path from 'path';
import { PlayersClient } from './players-client';

export const metadata = {
  title: 'Players',
  description: 'Profiles of the star players in the league.',
};

async function getPlayersAndTeams() {
  const playersPath = path.join(process.cwd(), 'src', 'data', 'players.json');
  const teamsPath = path.join(process.cwd(), 'src', 'data', 'teams.json');
  
  const playersData = await fs.readFile(playersPath, 'utf8');
  const teamsData = await fs.readFile(teamsPath, 'utf8');

  const { players } = JSON.parse(playersData);
  const { teams } = JSON.parse(teamsData);

  const teamsMap = teams.reduce((acc, team) => {
    acc[team.id] = team;
    return acc;
  }, {});

  const roles = [...new Set(players.map(p => p.role))];
  
  return { players, teamsMap, roles, teams };
}

export default async function PlayersPage() {
  const { players, teamsMap, roles, teams } = await getPlayersAndTeams();

  return <PlayersClient players={players} teamsMap={teamsMap} roles={roles} teams={teams} />;
}
