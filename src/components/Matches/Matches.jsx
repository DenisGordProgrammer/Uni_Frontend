import './Matches.scss'
const Matches = ({ matches }) => {
    return (
      <section className="matches-today">
        <h2>Матчі Сьогодні</h2>
        <div className="matches">
          {matches.map((match, index) => (
            <div className="match" key={index}>
              <div className="team">{match.team1}</div>
              <div className="time">{match.time}</div>
              <div className="team">{match.team2}</div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Matches;