import './Tournaments.scss';
import { NavLink } from 'react-router-dom';
import { formatDate } from '../dateUtils';

const Tournaments = ({ tournaments }) => {


  const sortedTournaments = [...tournaments].sort(
    (a, b) => new Date(a.startDate) - new Date(b.startDate)
  );

  const upcomingTournaments = sortedTournaments.filter(
    (tournament) => {
      const startDate = new Date(tournament.startDate);
      const currentYear = new Date().getFullYear();
      return startDate > new Date() && startDate.getFullYear() <= currentYear;
    }
  );

  return (
    <section className="upcoming-tournaments">
      <h2>Майбутні турніри</h2>
      <ul>
        {upcomingTournaments.map((tournament, index) => {
          const formattedPrize = Math.ceil(tournament.prizePool).toLocaleString('en-US');
          return (
            <li key={index}>
              <NavLink to="/tournaments" className="tournament">
                <span>{formatDate(tournament.startDate)} - {formatDate(tournament.endDate)}</span>
                <img 
                  src={tournament.tournamentIcon || ''} 
                  alt={tournament.tournamentName || 'No logo'} 
                  className="tournament-logo" 
                />
                <span>{tournament.tournamentName || 'No name'}</span>
                <span>${formattedPrize || 'N/A'}</span>
                <span>Команд: {tournament.participantsNumber || 'N/A'}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Tournaments;
