import './Tournaments.scss'

const Tournaments = ({ tournaments }) => {
    return(
        <section className="upcoming-tournaments">
        <h2>Майбутні турніри</h2>
        <ul>
          {tournaments.map((tournament, index) => (
            <li key={index} className="tournament">
              <span>{tournament.date}</span>
              <span>{tournament.name}</span>
              <span>{tournament.prize}</span>
              <span>Команд: {tournament.teams}</span>
            </li>
          ))}
        </ul>
      </section>
    );
};

export default Tournaments;