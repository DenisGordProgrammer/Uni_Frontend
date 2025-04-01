import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchPlayers, fetchTeams } from "../../components/api";
import "./PlayerPage.scss";
import PlayerCard from "../../components/PlayerCard/PlayerCard";
import PlayerStats from "../../components/PlayerStats/PlayerStats";

const getRandomStats = () => ({
    kd: (Math.random() * (1.5 - 0.1) + 0.1).toFixed(2),
    rating: (Math.random() * (1.5 - 0.1) + 0.1).toFixed(2),
    headshot: (Math.random() * 90).toFixed(1),
    adr: (Math.random() * 90).toFixed(1),
    killsPerRound: (Math.random() * (1.5 - 0.1) + 0.1).toFixed(2),
    deathsPerRound: (Math.random() * (1.5 - 0.1) + 0.1).toFixed(2)
});

const PlayerPage = () => {
    const { id } = useParams();
    const [player, setPlayer] = useState(null);
    const [team, setTeam] = useState(null);
    const [stats, setStats] = useState(getRandomStats());
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getPlayerAndTeam = async () => {
            try {
                const [playersData, teamsData] = await Promise.all([fetchPlayers(), fetchTeams()]);
                const foundPlayer = playersData.find(p => p.playerId === parseInt(id));
                setPlayer(foundPlayer);

                if (foundPlayer && foundPlayer.plTeam) {
                    const formattedTeam = foundPlayer.plTeam.replace(/_/g, " ").toLowerCase();
                    const foundTeam = teamsData.find(t => t.teamName.toLowerCase() === formattedTeam);
                    setTeam(foundTeam);
                }
            } catch (error) {
                console.error("Помилка завантаження даних:", error);
            } finally {
                setLoading(false);
            }
        };

        getPlayerAndTeam();
        setStats(getRandomStats());
    }, [id]);

    if (loading) return <p className="container">Loading...</p>;
    if (!player) return <p className="container">Гравця не знайдено.</p>;

    return (
        <div className="player-profile container">
            <PlayerCard player={player} team={team} />
            <PlayerStats stats={stats} />
            <NavLink to="/players" className="back-link">← Назад до списку</NavLink>
        </div>
    );
};

export default PlayerPage;
