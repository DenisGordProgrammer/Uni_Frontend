import navi from '../../assets/images/naviLogo.png';
import "./TournamentCard.scss"

const TournamentCard = ({ tournament, formatDate }) => {
    const formattedPrize = Math.ceil(tournament.prizePool).toLocaleString('en-US');

    return (
        <li key={tournament.tournamentId}>
            <a href={`/${tournament.tournamentName}`} className="page-tournament">
                <span>{formatDate(tournament.startDate)} - {formatDate(tournament.endDate)}</span>
                <img
                    src={tournament.tournamentIcon || ''}
                    alt={tournament.tournamentName || 'No logo'}
                    className="page-tournament-logo"
                />
                <span>{tournament.tournamentName || 'No name'}</span>
                <span>${formattedPrize || 'N/A'}</span>
                <span>Команд: {tournament.participantsNumber || 'N/A'}</span>
            </a>
        </li>
    );
};

export default TournamentCard;
