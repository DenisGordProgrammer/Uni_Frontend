import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <h1>Follower</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/tournaments">Tournaments</a>
      </nav>
    </header>
  );
};

export default Header;
