import "./Matches.scss";
import { useEffect, useState } from "react";
import { fetchMatches } from "../../components/api";
import MatchesCard from "../../components/MatchesCard/MatchesCard";


const Matches = () => {
    const [matches, setMatches] = useState([]);

    useEffect(() => {
        const getMatches = async () => {
            const matchesData = await fetchMatches();
            const sortedMatches = matchesData.sort((a, b) => new Date(a.date) - new Date(b.date));
            setMatches(sortedMatches);
        };

        getMatches();
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("uk-UA", { day: "2-digit", month: "2-digit", year: "numeric" });
    };

    const formatTime = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    };

    return (
        <div className="matches-list container">
            {matches.length > 0 &&
                Object.entries(
                    matches.reduce((acc, match) => {
                        const matchDate = formatDate(match.date);
                        if (!acc[matchDate]) acc[matchDate] = [];
                        acc[matchDate].push(match);
                        return acc;
                    }, {})
                ).map(([date, games]) => (
                    <div key={date} className="match-day">
                        <h2 className="match-date">{date}</h2>
                        <div className="match-container">
                            {games.map((match) => (
                                <MatchesCard key={match.matchId} match={match} formatTime={formatTime} />
                            ))}
                        </div>
                    </div>
                ))}
        </div>
    );
}


export default Matches;
