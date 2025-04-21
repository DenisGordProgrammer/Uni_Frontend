import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchPlayers, fetchTeams, fetchMatches } from "../../components/api";
import "./PlayerPage.scss";
import PlayerCard from "../../components/PlayerCard/PlayerCard";
import MatchesCard from "../../components/MatchesCard/MatchesCard";
import { formatDate } from "../../components/dateUtils";

const PlayerPage = () => {
    const { id } = useParams();
    const [player, setPlayer] = useState(null);
    const [team, setTeam] = useState(null);
    const [matches, setMatches] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            try {
                const [playersData, teamsData, matchesData] = await Promise.all([
                    fetchPlayers(),
                    fetchTeams(),
                    fetchMatches()
                ]);

                const playerId = parseInt(id);
                const foundPlayer = playersData.find(p => p.playerId === playerId);
                setPlayer(foundPlayer);

                if (foundPlayer && foundPlayer.plTeam) {
                    const formattedTeam = foundPlayer.plTeam.replace(/_/g, " ").toLowerCase();
                    const foundTeam = teamsData.find(t => t.teamName.toLowerCase() === formattedTeam);
                    setTeam(foundTeam);
                }

                const playerMatches = matchesData.filter(match =>
                    match.opponents.some(opponent =>
                        opponent.players?.some(p => p.playerId === playerId)
                    )
                );

                const sortedMatches = playerMatches.sort((a, b) => new Date(a.date) - new Date(b.date));
                setMatches(sortedMatches);

            } catch (error) {
                console.error("Помилка завантаження даних:", error);
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, [id]);

    if (loading) return <p className="container">Завантаження...</p>;
    if (!player) return <p className="container">Гравця не знайдено.</p>;

    const groupedMatches = Object.entries(
        matches.reduce((acc, match) => {
            const date = formatDate(match.date);
            if (!acc[date]) acc[date] = [];
            acc[date].push(match);
            return acc;
        }, {})
    );

    return (
        <div className="player-profile container">
            <PlayerCard player={player} team={team} />

            {matches.length > 0 ? (
                <div className="player-matches">
                    <h3>Матчі з участю гравця</h3>
                    <div className="player-matches-list">
                    {groupedMatches.map(([date, games]) => (
                        <div key={date} className="match-day">
                            <h4 className="match-date">{date}</h4>
                            <div className="match-container">
                                {games.map(match => (
                                    <MatchesCard key={match.matchId} match={match} />
                                ))}
                            </div>
                        </div>
                        
                    ))}
                    </div>
                </div>
            ) : (
                <p>Цей гравець ще не брав участі в матчах.</p>
            )}

            <NavLink to="/players" className="back-link">← Назад до списку</NavLink>
        </div>
    );
};

export default PlayerPage;
