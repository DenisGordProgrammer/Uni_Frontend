import "./TeamsCard.scss"

const TeamsCard = ({ team }) => {
    return (
        <li key={team.teamId}>
            <a href={`/${team.teamName}`} className="page-team">
                <div key={team.teamId} className="team-card">
                    <img src={team.teamLogo} alt={team.teamName} className="team-logo" />
                    <span className="team-name">{team.teamName}</span>
                </div>
            </a>
        </li>
    );
};
export default TeamsCard;