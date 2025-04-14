import "./TeamMatches.scss";
import { useEffect, useState } from "react";
import { fetchMatches } from "../../components/api";
import MatchesCard from "../../components/MatchesCard/MatchesCard";
import { formatDate } from "../../components/dateUtils";

const TeamMatches = ({ team }) => {
    const [matches, setMatches] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getMatches = async () => {
            try {
                const matchesData = await fetchMatches();

                // Фільтруємо матчі, де команда є одним з opponents
                const teamMatches = matchesData.filter(match =>
                    match.opponents.some(op => op.opponentName.toLowerCase() === team.teamName.toLowerCase())
                );

                const sorted = teamMatches.sort((a, b) => new Date(a.date) - new Date(b.date));
                setMatches(sorted);
            } catch (err) {
                console.error("Помилка завантаження матчів:", err);
            } finally {
                setLoading(false);
            }
        };

        getMatches();
    }, [team]);

    if (loading) return <p>Завантаження матчів...</p>;
    if (matches.length === 0) return <p>Немає матчів для цієї команди.</p>;

    const groupedMatches = Object.entries(
        matches.reduce((acc, match) => {
            const matchDate = formatDate(match.date);
            if (!acc[matchDate]) acc[matchDate] = [];
            acc[matchDate].push(match);
            return acc;
        }, {})
    );

    return (
        <div className="team-matches">
            <h3>Матчі команди</h3>
            <div className="team-matches-list">
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
    );
};

export default TeamMatches;
