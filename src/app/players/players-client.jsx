
'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Search, FilterX, Users } from 'lucide-react';

const INITIAL_VISIBLE_COUNT = 8;

export function PlayersClient({ players, teamsMap, roles, teams }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTeams, setSelectedTeams] = useState([]);
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  const filteredPlayers = useMemo(() => {
    return players
      .filter(player => {
        const matchesSearch = player.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesTeam = selectedTeams.length === 0 || selectedTeams.includes(player.teamId.toString());
        const matchesRole = selectedRoles.length === 0 || selectedRoles.includes(player.role);
        return matchesSearch && matchesTeam && matchesRole;
      })
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [players, searchTerm, selectedTeams, selectedRoles]);

  const handleTeamChange = (teamId) => {
    setSelectedTeams(prev =>
      prev.includes(teamId)
        ? prev.filter(id => id !== teamId)
        : [...prev, teamId]
    );
  };

  const handleRoleChange = (role) => {
    setSelectedRoles(prev =>
      prev.includes(role)
        ? prev.filter(r => r !== role)
        : [...prev, role]
    );
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedTeams([]);
    setSelectedRoles([]);
  };
  
  const hasActiveFilters = searchTerm || selectedTeams.length > 0 || selectedRoles.length > 0;

  const visiblePlayers = filteredPlayers.slice(0, visibleCount);

  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
       <header className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Star Players</h1>
        <p className="mt-4 text-lg text-muted-foreground">The talent that makes the game exciting.</p>
      </header>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Filters Sidebar */}
        <aside className="w-full md:w-1/4 lg:w-1/5 space-y-8 md:sticky top-24 self-start">
          <h2 className="text-2xl font-bold font-headline">Filters</h2>
          
          {/* Search Filter */}
          <div className="space-y-2">
            <Label htmlFor="search">Search Player</Label>
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                    id="search" 
                    placeholder="Search by name..."
                    className="pl-10" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
          </div>

          {/* Team Filter */}
          <div className="space-y-4">
            <h3 className="font-semibold">Team</h3>
            {teams.map(team => (
                <div key={team.id} className="flex items-center space-x-2">
                    <Checkbox 
                        id={`team-${team.id}`}
                        checked={selectedTeams.includes(team.id.toString())}
                        onCheckedChange={() => handleTeamChange(team.id.toString())}
                    />
                    <Label htmlFor={`team-${team.id}`} className="font-normal">{team.name}</Label>
                </div>
            ))}
          </div>

           {/* Role Filter */}
          <div className="space-y-4">
            <h3 className="font-semibold">Role</h3>
            {roles.map(role => (
                <div key={role} className="flex items-center space-x-2">
                    <Checkbox 
                        id={`role-${role}`}
                        checked={selectedRoles.includes(role)}
                        onCheckedChange={() => handleRoleChange(role)}
                    />
                    <Label htmlFor={`role-${role}`} className="font-normal">{role}</Label>
                </div>
            ))}
          </div>
          
          {hasActiveFilters && (
             <Button variant="ghost" onClick={clearFilters} className="w-full">
                <FilterX className="mr-2 h-4 w-4" />
                Clear Filters
            </Button>
          )}

        </aside>

        {/* Players Grid */}
        <main className="w-full md:w-3/4 lg:w-4/5">
            {visiblePlayers.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {visiblePlayers.map((player) => (
                    <Card key={player.id} className="text-center hover:shadow-xl transition-shadow duration-300">
                        <CardHeader>
                        <Avatar className="mx-auto h-32 w-32 mb-4 border-4 border-background">
                            <AvatarImage src={player.image} alt={player.name} className="object-cover" data-ai-hint={player.dataAiHint} />
                            <AvatarFallback>{player.name.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        <CardTitle className="font-headline">{player.name}</CardTitle>
                        <CardDescription>{player.role}</CardDescription>
                        </CardHeader>
                        <CardContent>
                        <p className="text-sm text-muted-foreground font-semibold">
                            {teamsMap[player.teamId]?.name || 'Unknown Team'}
                        </p>
                        </CardContent>
                    </Card>
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 bg-muted rounded-lg">
                    <Users className="mx-auto h-12 w-12 text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-semibold">No Players Found</h3>
                    <p className="mt-2 text-sm text-muted-foreground">Try adjusting your filters to find what you're looking for.</p>
                </div>
            )}

            {visibleCount < filteredPlayers.length && (
                <div className="mt-12 text-center">
                <Button onClick={() => setVisibleCount(prev => prev + INITIAL_VISIBLE_COUNT)}>
                    Load More Players
                </Button>
                </div>
            )}
        </main>
      </div>
    </div>
  );
}
