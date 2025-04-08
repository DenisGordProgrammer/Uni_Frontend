import "./MatchHeader.scss";

const MatchHeader = ({ match }) => {
    return (
        <div className="match-page-header">
            <h2>PGL Major Copenhagen 2024</h2>
            <div className="match-page-teams">
                <div className="match-page-team">
                    <img className="match-team-logo" src={match.opponents[0].opponentIcon} alt={match.opponents[0].opponentName} />
                    <p className="match-team-name">{match.opponents[0].opponentName}</p>
                </div>
                <div>
                <div className="match-page-score">
                    {match.opponents[0].score} : {match.opponents[1].score}
                </div>
                <p className="match-page-date">{new Date(match.date).toLocaleDateString()}</p>
                </div>
                <div className="match-page-team">
                    <img className="match-team-logo" src={match.opponents[1].opponentIcon} alt={match.opponents[1].opponentName} />
                    <p className="match-team-name">{match.opponents[1].opponentName}</p>
                </div>
            </div>
        </div>
    );
};

export default MatchHeader;
