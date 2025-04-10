import "./MatchMaps.scss";

const MatchMaps = ({ maps }) => {
    return (
        <div className="match-page-maps">
            {maps.map((map) => (
                <div key={map.matchMapId} className="match-map-card">
                    <img className="match-map-logo" src={map.mapIcon} alt={map.mapName} />
                    <p>{map.mapName}</p>
                    <p>{map.opponent1Score} : {map.opponent2Score}</p>
                </div>
            ))}
        </div>
    );
};

export default MatchMaps;
