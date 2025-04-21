import { useEffect, useState } from "react";
import "./CommandsList.scss";
import { fetchTeams } from "../api";

const CommandsList = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        const getTeams = async () => {
            const teamsData = await fetchTeams();

            const sortedTeams = teamsData.sort((a, b) => b.teamEarnings - a.teamEarnings);
            
            setTeams(sortedTeams.slice(0, 10));
        };

        getTeams();
    }, []);

    return (
        <div className="commands-list">
            <h2 className="title">Топ команд за прибутком</h2>
            <div className="content">
                {teams.map((team, index) => (
                    <div className="commands-row" key={team.teamName}>
                        <div className="commands-info">
                            <span>#{index + 1}. {team.teamName} (${team.teamEarnings.toLocaleString()})</span>
                            <img src={team.teamLogo} className="icon" alt={team.teamName} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CommandsList;
