// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './pages/Home/Home.jsx';
// import Tournaments from "./pages/Tournaments/Tournaments.jsx";
import './App.scss';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/tournaments" element={<Tournaments />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
