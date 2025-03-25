import "./PlayerList.scss";
import { useEffect, useState } from "react";
import { fetchPlayers, fetchTeams } from "../api";
import navi from "../../assets/images/naviLogo.png"

const PlayerList = () => {
    const [statePlayers, setstatePlayers] = useState([]);
    const [stateTeams, setStateTeams] = useState([]);

    useEffect(() => {
       
        const getPlayersAndTeams = async () => {
            try{
            const [playersData, teamsData] = await Promise.all([fetchPlayers(), fetchTeams()]);

            const sortedPlayers = playersData.sort((a, b) => b.plEarnings - a.plEarnings);
            setStateTeams(teamsData);
            setstatePlayers(sortedPlayers.slice(0, 10));
        } catch (error) {
            console.error("Помилка завантаження:", error);
        }
        };

        getPlayersAndTeams();
    }, []);

    const getTeamLogo = (playerTeam) => {
        if (!playerTeam) return navi; 
    
        const formattedPlayerTeam = playerTeam.replace(/_/g, " ").toLowerCase();
    
        const team = stateTeams.find(t => t.teamName.toLowerCase() === formattedPlayerTeam);
        
        return team ? team.teamLogo : navi;
    };
    
    return (
        <div className="players-list">
            <h2 className="title">Топ Гравців</h2>
            <div className="content">
                {statePlayers.map((player, index) => (
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