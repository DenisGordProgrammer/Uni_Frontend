import "./MatchesCard.scss";
import { NavLink } from 'react-router-dom';
import { formatTime } from "../dateUtils";

const MatchesCard = ({ match }) => {
    return (
        <div className="match-page-card">
            <NavLink to={`/matches/${match.matchId}`} className="match-info">
                <img src={match.opponents[0].opponentIcon} alt={match.opponents[0].opponentName} className="team-page-logo" />
                <div className="team">
                    <span className="team-name">{match.opponents[0].opponentName}</span>
                    <div className="match-time">{formatTime(match.date)}</div>
                    <span className="team-name">{match.opponents[1].opponentName}</span>
                </div>
                <img src={match.opponents[1].opponentIcon} alt={match.opponents[1].opponentName} className="team-page-logo" />
            </NavLink>
            <p className="tournament-name">{match.matchTournamentName}</p>
        </div>
    );
};

export default MatchesCard;
