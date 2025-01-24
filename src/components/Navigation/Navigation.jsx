import { NavLink } from 'react-router-dom';
import './Navigation.scss';
const Navigation = () => {
    return (
      <header className="header">
        <div className="logo">FOLLOWER</div>
        <nav className="nav">
          <NavLink to="/home" activeClassName="active-link">Головна</NavLink>
          <NavLink to="/tournaments" activeClassName="active-link">Турніри</NavLink>
          <NavLink to="/teams" activeClassName="active-link">Команди</NavLink>
          <NavLink to="/players" activeClassName="active-link">Гравці</NavLink>
          <NavLink to="/rating" activeClassName="active-link">Рейтинг</NavLink>
        </nav>
        <button className="login-btn">Login</button>
      </header>
    );
  };
  
  export default Navigation;