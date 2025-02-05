import "./Home.scss";
import Tournaments from '../../components/Tournaments/Tournaments';
import MatchesToday from '../../components/Matches/MatchesToday'
import { navi, faze, furia, g2, liquid, heroic } from '../../assets/images/logos';

const Home = () => {
  const matches = [
    { team1: "NAVI", team2: "Faze", time: "8:00", logo1: navi, logo2: faze },
    { team1: "Furia", team2: "G2", time: "10:00", logo1: furia, logo2: g2 },
    { team1: "Liquid", team2: "Heroic", time: "12:00", logo1: liquid, logo2: heroic },
    { team1: "NAVI", team2: "Faze", time: "14:00", logo1: navi, logo2: faze },
    { team1: "Furia", team2: "G2", time: "16:00", logo1: furia, logo2: g2 },
    { team1: "Liquid", team2: "Heroic", time: "18:00", logo1: liquid, logo2: heroic },
  ];

  const tournaments = [
    { name: "Майстер Ліга", date: "16.11-17.11", prize: "$10,800", teams: 4 },
    { name: "Tipsport MCR 2024", date: "22.11-24.11", prize: "$65,000", teams: 4 },
  ];

  return (
    <div className="home container">
      <MatchesToday matches={matches} />
      <Tournaments tournaments={tournaments} />
    </div>
  );
};

export default Home;
