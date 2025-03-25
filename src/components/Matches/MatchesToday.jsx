import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./MatchesToday.scss";
import { fetchMatches } from "../api";
import { useEffect, useState } from "react";

const MatchesToday = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const getMatches = async () => {
      const matchesData = await fetchMatches();
      console.log(matchesData);
      const filteredMatches = matchesData.filter(match => {
        const matchDate = match.date.split(" ")[0]; 
        return matchDate === "2025-03-13";
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
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
  };
  
// коментить если нужно проверить дату
  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <section className="matches-today">
      <h2>Матчі Сьогодні</h2>
      <div className="slider">
        <Slider {...settings}>
          {matches.map((match) => (
             <a href={`/${match.matchPageId}`} key={match.matchId}>
              <div className="match-card">
                <img src={match.opponents[0].opponentIcon} alt={match.opponents[0].opponentName} className="team-logo" />
                <div className="time">{formatTime(match.date)}</div>
                {/* <div className="time">{(match.date)}</div> раскомент для проверки даты */}
                <img src={match.opponents[1].opponentIcon} alt={match.opponents[1].opponentName} className="team-logo" />
              </div>
            </a>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default MatchesToday;