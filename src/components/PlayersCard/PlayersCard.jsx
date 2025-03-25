import "./PlayersCard.scss"
import navi from "../../assets/images/naviLogo.png"
const PlayersCard = ({ player }) => {
    
    const nameParts = player.plName.split(" ");
    const firstName = nameParts[0] || "";  
    const lastName = nameParts[1] || "";   
    
    return (
        <li key={player.playerId}>
            <a href={`/${player.plNickname}`} className="page-player">
                <div key={player.playerId} className="player-card">
                    <img src= {navi} alt={player.plName} className="player-logo" />
                    <div className="player-info">
                        <span className="player-name">{firstName}</span>
                        <span className="player-nickname">&nbsp;{player.plNickname}&nbsp;</span>
                        <span className="player-name">{lastName}</span>
                    </div>
                </div>
            </a>
        </li>
    );
};
export default PlayersCard;