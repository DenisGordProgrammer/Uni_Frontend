import "./Home.scss";
import Navigation from '../../components/Navigation/Navigation'
import Tournaments from '../../components/Tournaments/Tournaments';
import Matches from '../../components/Matches/Matches'

const Home = () => {
  const matches = [
    { team1: "NaVi", team2: "FaZe", time: "8:00" },
    { team1: "G2", team2: "Heroic", time: "12:00" },
  ];

  const tournaments = [
    { name: "Майстер Ліга", date: "16.11-17.11", prize: "$10,800", teams: 4 },
    { name: "Tipsport MCR 2024", date: "22.11-24.11", prize: "$65,000", teams: 4 },
  ];

  return (
    <div className="home">
      <Navigation />
      <Matches matches={matches} />
      <Tournaments tournaments={tournaments} />
    </div>
  );
};

export default Home;
