import "./Home.scss";
import Tournaments from '../../components/Tournaments/Tournaments';
import MatchesToday from '../../components/Matches/MatchesToday'
import { navi, faze, furia, g2, liquid, heroic, newsBg, Zywoo, m0NESY, donk, tomaszin, kyosuke, INS, Xantares, malbsMd, mouz, mongolz, astralis } from '../../assets/images/logos';
import NewsSlider from "../../components/NewsSlider/NewsSlider";
import PlayerList from "../../components/PlayerList/PlayerList";
import CommandsList from "../../components/CommandsList/CommandsList";
import { useEffect } from "react";
import { useState } from "react";

const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
console.log(import.meta.env);

const fetchTournaments = async () => {
  try {
    const tournamentsList = await fetch(`${VITE_BACKEND_URL}/api/TournamentsLists/game/dota2`).then((res) => res.json());
    
    return tournamentsList
  } catch (error) {
    console.error(error);
    return []
  }
}

const Home = () => {
  const matches = [
    { team1: "NAVI", team2: "Faze", time: "8:00", logo1: navi, logo2: faze },
    { team1: "Furia", team2: "G2", time: "10:00", logo1: furia, logo2: g2 },
    { team1: "Liquid", team2: "Heroic", time: "12:00", logo1: liquid, logo2: heroic },
    { team1: "NAVI", team2: "Faze", time: "14:00", logo1: navi, logo2: faze },
    { team1: "Furia", team2: "G2", time: "16:00", logo1: furia, logo2: g2 },
    { team1: "Liquid", team2: "Heroic", time: "18:00", logo1: liquid, logo2: heroic },
  ];

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
  const [stateTournaments, setStateTournaments] = useState([{
    "tournamentId": 14899, "tournamentName": "World Cyber Games 2011 China Finals",
    "organizer": { "organizer1": "World Cyber Games" }, "startDate": "2011-08-02T00:00:00", "endDate": "2011-08-03T00:00:00",
    "location": { "country1": "cn", "city1": "Shanghai", "region1": "China" }, "prizePool": 5455.99, "tournamentGame": "dota",
    "tournamentDate": null, "tournamentResults": []
  }, {
    "tournamentId": 14890, "tournamentName": "World Cyber Games 2009 China Finals",
    "organizer": { "organizer1": "World Cyber Games" }, "startDate": "2012-09-02T00:00:00", "endDate": "2012-09-03T00:00:00",
    "location": { "country1": "cn", "city1": "Shanghai", "region1": "China" }, "prizePool": 81723, "tournamentGame": "dota",
    "tournamentDate": null, "tournamentResults": []
  },
  { "tournamentId": 14900, "tournamentName": "WCG Asian Championship 2010", "organizer": { "organizer1": "World Cyber Games" }, "startDate": "2010-07-09T00:00:00", "endDate": "2010-07-11T00:00:00", "location": { "country1": "sg", "city1": "Singapore", "region1": "Southeast Asia" }, "prizePool": 6519.02, "tournamentGame": "dota", "tournamentDate": null, "tournamentResults": [] }, { "tournamentId": 14901, "tournamentName": "CCT Series 7", "organizer": { "organizer2": "GRID", "organizer1": "GAM3RS X" }, "startDate": "2025-02-25T00:00:00", "endDate": "2025-03-07T00:00:00", "location": { "region1": "Europe", "region2": "CIS" }, "prizePool": 50000, "tournamentGame": "dota2", "tournamentDate": null, "tournamentResults": [] }, { "tournamentId": 14902, "tournamentName": "Universal League Season 2", "organizer": { "organizer1": "Nitro Studios" }, "startDate": "2025-02-27T00:00:00", "endDate": "2025-03-15T00:00:00", "location": { "region1": "South America" }, "prizePool": 10000, "tournamentGame": "dota2", "tournamentDate": null, "tournamentResults": [] }, { "tournamentId": 14903, "tournamentName": "ACL X ESL Challenger China", "organizer": { "organizer2": "ESL Gaming", "organizer1": "Hero Esports" }, "startDate": "2025-05-01T00:00:00", "endDate": "2025-05-03T00:00:00", "location": { "country1": "cn", "city1": "Shanghai", "region1": "China" }, "prizePool": 100000, "tournamentGame": "dota2", "tournamentDate": null, "tournamentResults": [] }])

  useEffect(() => {
    // const tournamentsData = fetchTournaments()
    // setStateTournaments(tournamentsData)
  }, [])



  return (
    <div className="home container">
      <div className="matches-widget"><MatchesToday matches={matches} /></div>
      <div className="news-widget"><NewsSlider newsSlides={newsSlides} /></div>
      <div className="players-widget"><PlayerList players={players} /></div>
      <div className="tournaments"><Tournaments tournaments={stateTournaments} /></div>
      <div className="commands-widget"><CommandsList commands={commands} /></div>
    </div>
  );
};

export default Home;