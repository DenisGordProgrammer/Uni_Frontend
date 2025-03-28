import "./PlayerStats.scss"

const PlayerStats = ({ stats }) => {
    return (
        <div className="stats-card">
            <div className="stat-item"><span>K/D</span><span>{stats.kd}</span></div>
            <div className="stat-item"><span>Rating 2.0</span><span>{stats.rating}</span></div>
            <div className="stat-item"><span>Headshot %</span><span>{stats.headshot}%</span></div>
            <div className="stat-item"><span>Kills / round</span><span>{stats.killsPerRound}</span></div>
            <div className="stat-item"><span>ADR</span><span>{stats.adr}</span></div>
            <div className="stat-item"><span>Deaths / round</span><span>{stats.deathsPerRound}</span></div>
            <p className="add-source">Taken from hltv.org</p>
        </div>
    );
};

export default PlayerStats;
