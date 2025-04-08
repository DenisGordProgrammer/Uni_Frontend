import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Tournaments from "./pages/Tournaments/Tournaments";
import Teams from "./pages/Teams/Teams";
import Players from "./pages/Players/Players";
import PlayerPage from "./pages/PlayerPage/PlayerPage"
import Matches from "./pages/Matches/Matches";
import MatchPage from "./pages/MatchPage/MatchPage"
import './App.scss';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tournaments" element={<Tournaments />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/players" element={<Players />} />
        <Route path="/players/:id" element={<PlayerPage />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/matches/:id" element={<MatchPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
