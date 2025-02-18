import "./Home.scss";
import Tournaments from '../../components/Tournaments/Tournaments';
import MatchesToday from '../../components/Matches/MatchesToday'
import { navi, faze, furia, g2, liquid, heroic, newsBg } from '../../assets/images/logos';
import NewsSlider from "../../components/NewsSlider/NewsSlider";

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

  const newsSlides = [
    {from: "hltv.org", bg: newsBg, title: "Device пропусте мейджор зза проблем зі здоров'ям", text: "На цьому мейджорі замість Device буде грати bro, замість нього зіграє Каспер Меллер"},
    {from: "somewhere.gg", bg: newsBg, title: "Розпочався другий сезон прем’єр-режиму, пошук матчів відновлено.", text: "Кожен гравець, який здобув рейтинг CS упродовж першого сезону, отримає пам’ятну медаль першого сезону, що містить детальну сезонну статистику."},
    {from: "wikipedia.com", bg: newsBg, title: "Оновлення радару", text: "Додано нову опцію динамічного масштабування радара, яка збільшує чи зменшує його, щоби включати ваших товаришів по команді, бомбу та інші позначувані елементи."},
  ]
  return (
    <div className="home container">
      <MatchesToday matches={matches} />
      <NewsSlider newsSlides={newsSlides} />
      <Tournaments tournaments={tournaments} />
    </div>
  );
};

export default Home;
