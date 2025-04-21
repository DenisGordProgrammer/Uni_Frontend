import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from 'react-router-dom';
import Slider from "react-slick";
import "./MatchesToday.scss";
import { fetchMatches } from "../api";
import { useEffect, useState } from "react";
import { formatTime } from "../dateUtils";

const MatchesToday = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const getMatches = async () => {
      const matchesData = await fetchMatches();
      const filteredMatches = matchesData.filter(match => {
        const matchDate = match.date.split(" ")[0];
        const latestDate = matchesData.reduce((latest, match) => {
          const matchDate = match.date.split(" ")[0];
          return matchDate > latest ? matchDate : latest;
        }, "0000-00-00");
        return matchDate === latestDate;
      });


      filteredMatches.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
      });
      setMatches(filteredMatches);
    };

    getMatches();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: matches.length < 3 ? 2 : 3,
    slidesToScroll: 1,
    arrows: true,
  };


  return (
    <section className="matches-today">
      <h2>Останні матчі</h2>
      <div className="slider">
        <Slider {...settings}>
          {matches.map((match) => (
             <NavLink to={`/matches/${match.matchId}`} key={match.matchId}>
             <div className="match-card">
               <img src={match.opponents[0].opponentIcon} alt={match.opponents[0].opponentName} className="team-logo" />
               <div className="time">{formatTime(match.date)}</div>
               <img src={match.opponents[1].opponentIcon} alt={match.opponents[1].opponentName} className="team-logo" />
             </div>
           </NavLink>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default MatchesToday;