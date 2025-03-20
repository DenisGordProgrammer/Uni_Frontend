import "./Home.scss";
import Tournaments from '../../components/Tournaments/Tournaments';
import MatchesToday from '../../components/Matches/MatchesToday'
import { navi, faze, furia, g2, liquid, heroic, newsBg, Zywoo, m0NESY, donk, tomaszin, kyosuke, INS, Xantares, malbsMd, mouz, mongolz, astralis } from '../../assets/images/logos';
import NewsSlider from "../../components/NewsSlider/NewsSlider";
import PlayerList from "../../components/PlayerList/PlayerList";
import CommandsList from "../../components/CommandsList/CommandsList";
import { fetchTournaments, fetchMatches, fetchTeams } from "../../components/api";
import { useEffect, useState } from "react";

const Home = () => {

  const newsSlides = [
    { from: "hltv.org", bg: newsBg, title: "Device пропусте мейджор зза проблем зі здоров'ям", text: "На цьому мейджорі замість Device буде грати bro, замість нього зіграє Каспер Меллер" },
    { from: "somewhere.gg", bg: newsBg, title: "Розпочався другий сезон прем’єр-режиму, пошук матчів відновлено.", text: "Кожен гравець, який здобув рейтинг CS упродовж першого сезону, отримає пам’ятну медаль першого сезону, що містить детальну сезонну статистику." },
    { from: "wikipedia.com", bg: newsBg, title: "Оновлення радару", text: "Додано нову опцію динамічного масштабування радара, яка збільшує чи зменшує його, щоби включати ваших товаришів по команді, бомбу та інші позначувані елементи." },
  ];

  const players = [
    { name: "Zywoo", rating: 1.39, icon: Zywoo },
    { name: "m0NESY", rating: 1.36, icon: m0NESY },
    { name: "donk", rating: 1.33, icon: donk },
    { name: "tomaszin", rating: 1.30, icon: tomaszin },
    { name: "kyosuke", rating: 1.29, icon: kyosuke },
    { name: "INS", rating: 1.26, icon: INS },
    { name: "Xantares", rating: 1.25, icon: Xantares },
    { name: "malbsMd", rating: 1.23, icon: malbsMd },
  ];
  const commands = [
    { name: "Natus Vincere", icon: navi },
    { name: "G2", icon: m0NESY },
    { name: "Vitality", icon: Zywoo },
    { name: "Spirit", icon: donk },
    { name: "Mouz", icon: mouz },
    { name: "Faze", icon: faze },
    { name: "Eternal Fire", icon: Xantares },
    { name: "Heroic", icon: heroic },
    { name: "The MongolZ", icon: mongolz },
    { name: "Astralis", icon: astralis },
  ]
  const [stateTournaments, setStateTournaments] = useState([])
  const [stateMatches, setStateMatches] = useState([]);
  const [stateTeams, setStateTeams] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const tournamentsData = await fetchTournaments();
      
      const matchesData = await fetchMatches();
      const teamsData = await fetchTeams();
      console.log(teamsData)
      setStateTeams(teamsData);
      setStateTournaments(tournamentsData);
      setStateMatches(matchesData);
    };
  
    getData();
  }, []);
  


  return (
    <div className="home container">
      <div className="matches-widget"><MatchesToday matches={stateMatches} /></div>
      <div className="news-widget"><NewsSlider newsSlides={newsSlides} /></div>
      <div className="players-widget"><PlayerList players={players} /></div>
      <div className="tournaments"><Tournaments tournaments={stateTournaments} /></div>
      <div className="commands-widget"><CommandsList commands={stateTeams} /></div>
    </div>
  );
};

export default Home;