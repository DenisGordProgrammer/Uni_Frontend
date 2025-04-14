import "./TeamsCard.scss";
import { NavLink } from "react-router-dom";

const TeamsCard = ({ team }) => {
    return (
        <li key={team.teamId}>
            <NavLink to={`/teams/${team.teamId}`} className="page-team">
                <div key={team.teamId} className="team-card">
                    <img src={team.teamLogo} alt={team.teamName} className="team-logo" />
                    <span className="team-name">{team.teamName}</span>
                </div>
            </NavLink>
        </li>
    );
};

export default TeamsCard;
