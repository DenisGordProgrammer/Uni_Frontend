import "./Home.scss";
import Tournaments from '../../components/Tournaments/Tournaments';
import MatchesToday from '../../components/Matches/MatchesToday'
import { navi, faze, furia, g2, liquid, heroic, newsBg, Zywoo, m0NESY, donk, tomaszin, kyosuke, INS, Xantares, malbsMd, mouz, mongolz, astralis } from '../../assets/images/logos';
import NewsSlider from "../../components/NewsSlider/NewsSlider";
import PlayerList from "../../components/PlayerList/PlayerList";
import CommandsList from "../../components/CommandsList/CommandsList";
import { fetchTournaments, fetchMatches, fetchTeams, fetchPlayers } from "../../components/api";
import { useEffect, useState } from "react";

const Home = () => {

  const newsSlides = [
    { from: "hltv.org", bg: newsBg, title: "Device пропусте мейджор зза проблем зі здоров'ям", text: "На цьому мейджорі замість Device буде грати bro, замість нього зіграє Каспер Меллер" },
    { from: "somewhere.gg", bg: newsBg, title: "Розпочався другий сезон прем’єр-режиму, пошук матчів відновлено.", text: "Кожен гравець, який здобув рейтинг CS упродовж першого сезону, отримає пам’ятну медаль першого сезону, що містить детальну сезонну статистику." },
    { from: "wikipedia.com", bg: newsBg, title: "Оновлення радару", text: "Додано нову опцію динамічного масштабування радара, яка збільшує чи зменшує його, щоби включати ваших товаришів по команді, бомбу та інші позначувані елементи." },
  ];

  const [stateTournaments, setStateTournaments] = useState([])
  const [stateMatches, setStateMatches] = useState([]);
  const [stateTeams, setStateTeams] = useState([]);
  const [statePlayers, setstatePlayers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const tournamentsData = await fetchTournaments();
      
      const matchesData = await fetchMatches();
      const teamsData = await fetchTeams();
      const playersData = await fetchPlayers();
      setStateTeams(teamsData);
      setStateTournaments(tournamentsData);
      setStateMatches(matchesData);
      setstatePlayers(playersData);
    };
  
    getData();
  }, []);
  


  return (
    <div className="home container">
      <div className="matches-widget"><MatchesToday matches={stateMatches} /></div>
      <div className="news-widget"><NewsSlider newsSlides={newsSlides} /></div>
      <div className="players-widget"><PlayerList players={statePlayers} /></div>
      <div className="tournaments"><Tournaments tournaments={stateTournaments} /></div>
      <div className="commands-widget"><CommandsList commands={stateTeams} /></div>
    </div>
  );
};

export default Home;