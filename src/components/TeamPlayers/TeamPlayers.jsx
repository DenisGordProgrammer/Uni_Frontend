import "./TeamPlayers.scss";
import playerLogo from "../../assets/images/Player.png";
import { NavLink } from "react-router-dom";


const TeamPlayers = ({ teammates, team }) => {
    if (!teammates.length) return <p>Немає гравців для цієї команди.</p>;

    return (
        <div className="teammates-section">
            <div className="teammates-list">
                {teammates.map(mate => {
                    const nameParts = mate.plName.split(" ");
                    const firstName = nameParts[0] || "";
                    const lastName = nameParts[1] || "";

                    return (
                        <li key={mate.playerId}>
                        <NavLink to={`/players/${mate.playerId}`} className="page-player">
                            <div key={mate.playerId} className="player-card">
                                <img src={playerLogo} alt={mate.plName} className="player-logo" />
                                <div className="player-info">
                                    <span className="player-name1">{firstName}</span>
                                    <span className="player-nickname1">&nbsp;{mate.plNickname}&nbsp;</span>
                                    <span className="player-name1">{lastName}</span>
                                </div>
                            </div>
                        </NavLink>
                    </li>
                    );
                })}
            </div>
        </div>
    );
};

export default TeamPlayers;
