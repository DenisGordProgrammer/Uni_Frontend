import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./MatchesToday.scss";


const MatchesToday = ({ matches }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <section className="matches-today">
      <h2>Матчі Сьогодні</h2>
      <div className="slider">
        <Slider {...settings}>
          {matches.map((match) => (
            <a href={`/${match.time}`} key={`${match.team1}-${match.team}-${match.time}`}>
              <div className="match-card">
                <img src={match.logo1} alt={match.team1} className="team-logo" />
                <div className="time">{match.time}</div>
                <img src={match.logo2} alt={match.team2} className="team-logo" />
              </div>
            </a>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default MatchesToday;