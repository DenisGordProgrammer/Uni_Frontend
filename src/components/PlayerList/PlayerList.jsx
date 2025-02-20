import "./PlayerList.scss";

const PlayerList = ({ players }) => {
    return (
        <div className="players-list">
            <h2 className="title">Топ Гравців</h2>
            <div className="player-header">
                <span>Гравець</span>
                <span>Рейтинг 2.0</span>
            </div>
            <div className="content">
                {players.map((player) => (
                    <div className="player-row" key={player.name}>
                        <div className="player-info">
                            <img src={player.icon} className="icon" />
                            <span>{player.name}</span>
                        </div>
                        <span className="rating">{player.rating.toFixed(2)}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PlayerList;
