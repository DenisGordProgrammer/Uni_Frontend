import './Tournaments.scss';
import navi from '../../assets/images/naviLogo.png'
const Tournaments = ({ tournaments }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('uk-UA', { day: '2-digit', month: '2-digit' });
  };


  const sortedTournaments = [...tournaments].sort(
    (a, b) => new Date(a.startDate) - new Date(b.startDate)
  );

  return (
    <section className="upcoming-tournaments">
      <h2>Майбутні турніри</h2>
      <ul>
      {sortedTournaments.map((tournament, index) => {
          const formattedPrize = Math.ceil(tournament.prizePool).toLocaleString('en-US');

          return (
            <li key={index}>
              <a href='/tournaments' className="tournament">
              <span>{formatDate(tournament.startDate)} - {formatDate(tournament.endDate)}</span>
              <img 
                src={navi || ''} 
                alt={tournament.tournamentName && navi || 'No logo'} 
                className="tournament-logo" 
              />
              <span>{tournament.tournamentName || 'No name'}</span>
              <span>${formattedPrize || 'N/A'}</span>
              <span>Команд: {tournament.teams || 'N/A'}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Tournaments;
