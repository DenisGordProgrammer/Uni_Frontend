import "./PlayerList.scss";
import { useEffect, useState } from "react";
import { fetchPlayers, fetchTeams } from "../api";
import teamLogo from "../../assets/images/Team.png"

const PlayerList = () => {
    const [players, setPlayers] = useState([]);
    const [teams, setTeams] = useState([]);

    useEffect(() => {

        const getPlayersAndTeams = async () => {
            try {
                const [playersData, teamsData] = await Promise.all([fetchPlayers(), fetchTeams()]);

                const sortedPlayers = playersData.sort((a, b) => b.plEarnings - a.plEarnings);
                setTeams(teamsData);
                setPlayers(sortedPlayers.slice(0, 10));
            } catch (error) {
                console.error("Помилка завантаження:", error);
            }
        };

        getPlayersAndTeams();
    }, []);

    const getTeamLogo = (playerTeam) => {
        if (!playerTeam) return teamLogo;

        const formattedPlayerTeam = playerTeam.replace(/_/g, " ").toLowerCase();

        const team = teams.find(t => t.teamName.toLowerCase() === formattedPlayerTeam);

        return team ? team.teamLogo : teamLogo;
    };

    return (
        <div className="players-list">
            <h2 className="title">Топ гравців за прибутком</h2>
            <div className="content">
                {players.map((player, index) => (
                    <div className="player-row" key={player.playerId}>
                        <div className="player-info">
                            <span>#{index + 1}. {player.plNickname}</span>
                            <img src={getTeamLogo(player.plTeam)} className="icon" alt={player.plName} />
                        </div>
                        <span className="earnings">${player.plEarnings.toLocaleString()}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PlayerList;