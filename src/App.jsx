import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Tournaments from "./pages/Tournaments/Tournaments";
import Teams from "./pages/Teams/Teams";
import './App.scss';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tournaments" element={<Tournaments />} />
        <Route path="/teams" element={<Teams />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
