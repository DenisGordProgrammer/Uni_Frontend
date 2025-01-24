import React from 'react';
import Header from './src/components/Header/Header';
import Footer from './src/components/Footer/Footer';
import Home from './src/pages/Home/Home';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
