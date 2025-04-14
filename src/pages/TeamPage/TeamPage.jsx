import "./TeamPage.scss";
import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchPlayers, fetchTeams } from "../../components/api";
import TeamCard from "../../components/TeamCard/TeamCard";
import TeamPlayers from "../../components/TeamPlayers/TeamPlayers";
import TeamMatches from "../../components/TeamMatches/TeamMatches";


const TeamPage = () => {
    const { id } = useParams(); // теперь это ID команды
    const [team, setTeam] = useState(null);
    const [teammates, setTeammates] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getTeamAndPlayers = async () => {
            try {
                const [playersData, teamsData] = await Promise.all([fetchPlayers(), fetchTeams()]);
                const currentTeam = teamsData.find(t => t.teamId === parseInt(id));

                if (currentTeam) {
                    setTeam(currentTeam);

                    const formattedTeamName = currentTeam.teamName.toLowerCase().replace(/_/g, " ");
                    const teamPlayers = playersData.filter(p =>
                        p.plTeam?.toLowerCase().replace(/_/g, " ") === formattedTeamName
                    );

                    setTeammates(teamPlayers);
                }
            } catch (error) {
                console.error("Помилка завантаження даних:", error);
            } finally {
                setLoading(false);
            }
        };

        getTeamAndPlayers();
    }, [id]);

    if (loading) return <p className="container">Loading...</p>;
    if (!team) return <p className="container">Команду не знайдено.</p>;

    return (
        <div className="player-profile container">
            <TeamCard team={team} teammates={teammates} />
            <TeamPlayers teammates={teammates} team={team} />
            <TeamMatches team={team} />
            <NavLink to="/teams" className="back-link">← Назад до списку</NavLink>
        </div>
    );
};

export default TeamPage;
