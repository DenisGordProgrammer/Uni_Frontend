import "./PlayersCard.scss";
import { NavLink } from "react-router-dom";
import player_logo from "../../assets/images/Player.png";

const PlayersCard = ({ player }) => {
    const nameParts = player.plName.split(" ");
    const firstName = nameParts[0] || "";  
    const lastName = nameParts[1] || "";   
    
    return (
        <li key={player.playerId}>
            <NavLink to={`/${player.plNickname}`} className="page-player">
                <div key={player.playerId} className="player-card">
                    <img src={player_logo} alt={player.plName} className="player-logo" />
                    <div className="player-info">
                        <span className="player-name">{firstName}</span>
                        <span className="player-nickname">&nbsp;{player.plNickname}&nbsp;</span>
                        <span className="player-name">{lastName}</span>
                    </div>
                </div>
            </NavLink>
        </li>
    );
};

export default PlayersCard;
