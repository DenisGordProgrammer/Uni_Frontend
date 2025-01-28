import { NavLink } from 'react-router-dom';
import './Navigation.scss';
import logo from '../../../logo.png'
const Navigation = () => {
    return (
      <header className="header">
        <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>
        <img src={logo} alt='Logo' />
        </NavLink>
        <nav className="nav">
          <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>Головна</NavLink>
          <NavLink to="/tournaments" className={({ isActive }) => isActive ? "active-link" : ""}>Турніри</NavLink>
          <NavLink to="/teams" className={({ isActive }) => isActive ? "active-link" : ""}>Команди</NavLink>
          <NavLink to="/players" className={({ isActive }) => isActive ? "active-link" : ""}>Гравці</NavLink>
          <NavLink to="/rating" className={({ isActive }) => isActive ? "active-link" : ""}>Рейтинг</NavLink>
        </nav>
        <NavLink to="/login" className={({ isActive }) => isActive ? "active-link" : ""}>
        <button className="login-btn">Login</button>
        </NavLink>
      </header>
    );
  };
  
  export default Navigation;