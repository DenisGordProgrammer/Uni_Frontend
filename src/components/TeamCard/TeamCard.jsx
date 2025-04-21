import "./TeamCard.scss";
import teamLogo from "../../assets/images/Team.png";

const TeamCard = ({ team, teammates = [] }) => {
    // Безопасный расчёт среднего возраста
    const validPlayers = teammates.filter(player => typeof player.plAge === "number");

    const averageAge = validPlayers.length
        ? Math.round(validPlayers.reduce((sum, player) => sum + player.plAge, 0) / validPlayers.length)
        : "N/A";

    return (
        <div className="profile-card1">
            <img src={team.teamLogo || teamLogo} alt="Team Logo" className="team_img" />
            <div className="profile-info">
            <h2>{team.teamName}</h2>
                <p>Регіон: {team.teamRegion}</p>
                <p>Середній вік команди: {averageAge}</p>
            </div>
        </div>
    );
};

export default TeamCard;
