// import React from "react";
import "./Home.scss";
// import NewsSlider from "../../components/NewsSlider/NewsSlider";

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
      <header className="header">
        <div className="logo">FOLLOWER</div>
        <nav className="nav">
          <a href="#home">Головна</a>
          <a href="#tournaments">Турніри</a>
          <a href="#teams">Команди</a>
          <a href="#players">Гравці</a>
          <a href="#rating">Рейтинг</a>
        </nav>
        <button className="login-btn">Login</button>
      </header>

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

      <footer className="footer">
        <div className="contacts">
          <p>Наші контакти:</p>
          <p>follower.help@work.ua</p>
          <p>support@work.ua</p>
          <p>gamehelp@work.ua</p>
        </div>
        <div className="socials">
          <p>Ми у соціальних мережах:</p>
          <a href="#telegram">Telegram</a>
          <a href="#instagram">Instagram</a>
          <a href="#twitter">Twitter</a>
        </div>
        <div className="sponsors">
          <p>Інформацію взято з:</p>
          <p>twitch</p>
          <p>hltv</p>
          <p>UESF</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
