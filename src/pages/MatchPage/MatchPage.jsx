import "./MatchPage.scss";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { fetchMatches } from "../../components/api";
import MatchHeader from "../../components/MatchHeader/MatchHeader";
import MatchMaps from "../../components/MatchMaps/MatchMaps";
import MatchPlayers from "../../components/MatchPlayers/MatchPlayers";

const MatchPage = () => {
    const { id } = useParams();
    const [match, setMatch] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getMatch = async () => {
            try {
                const matchesData = await fetchMatches();
                const foundMatch = matchesData.find(m => m.matchId === parseInt(id));
                setMatch(foundMatch);
            } catch (error) {
                console.error("Помилка завантаження матчу:", error);
            } finally {
                setLoading(false);
            }
        };
        getMatch();
    }, [id]);

    if (loading) return <p className="container">Loading...</p>;
    if (!match) return <p className="container">Матч не знайдено</p>;

    return (
        <div className="match-page container">
            <MatchHeader match={match} />
            <MatchMaps maps={match.games} />
            <MatchPlayers players={match.opponents} />
            <NavLink to="/matches" className="back-link">← Назад до списку</NavLink>
        </div>
    );
};

export default MatchPage;
