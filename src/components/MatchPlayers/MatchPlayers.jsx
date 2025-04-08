import "./MatchPlayers.scss";

const MatchPlayers = ({ players }) => {
    return (
        <div className="match-page-players">
            <h3>{players[0].currentMap}</h3>
            <div className="match-teams-players">
                <div className="match-page-player">
                    {players[0].players.map((player) => (
                        <p key={player.playerId}>
                             <img src={players[0].opponentIcon} alt="Team Logo" className="team-logo" />
                            <span>{player.playerNickname}</span>
                            <span></span>
                        </p>
                    ))}
                </div>
                <div className="match-page-player">
                    {players[1].players.map((player) => (
                        <p key={player.playerId}>
                            <span></span>
                            <span>{player.playerNickname}</span>
                            <img src={players[1].opponentIcon} alt="Team Logo" className="team-logo" />
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MatchPlayers;
