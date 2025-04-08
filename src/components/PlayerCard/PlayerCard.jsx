import "./PlayerCard.scss"
import teamLogo from "../../assets/images/Team.png";
import playerLogo from "../../assets/images/Player.png";

const PlayerCard = ({ player, team }) => {
    return (
        <div className="profile-card">
            <img src={playerLogo} alt={player.plName} />
            <div className="profile-info">
                <h2>{player.plName}</h2>
                <p>Нікнейм: {player.plNickname}</p>
                <p>Вік: {player.plAge}</p>
                <p>Батьківщина: {player.plNationality}</p>
                <p>
                    Команда: {player.plTeam ? (
                        <>
                            {player.plTeam.replace(/_/g, " ")}
                            <img src={team ? team.teamLogo : teamLogo} alt="Team Logo" className="team-logo" />
                        </>
                    ) : "Без команди"}
                </p>
                <p>Earnings: ${player.plEarnings.toLocaleString()}</p>
                <span className="main-source">Taken from liquipedia.net</span>
            </div>
        </div>
    );
};

export default PlayerCard;
