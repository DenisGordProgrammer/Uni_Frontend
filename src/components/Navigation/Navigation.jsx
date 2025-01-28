import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import './Navigation.scss';
import logo from '../../../logo.png'

const Navigation = () => {
  return (
    <header className="header">
      <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>
        <img src={logo} alt='Logo' />
      </NavLink>
      <nav className="nav">
        <NavLink to="/" className={({ isActive }) => cn({ "active-link": isActive })}>
          Головна
        </NavLink>
        <NavLink to="/tournaments" className={({ isActive }) => cn({ "active-link": isActive })}>
          Турніри
        </NavLink>
        <NavLink to="/teams" className={({ isActive }) => cn({ "active-link": isActive })}>
          Команди
        </NavLink>
        <NavLink to="/players" className={({ isActive }) => cn({ "active-link": isActive })}>
          Гравці
        </NavLink>
        <NavLink to="/rating" className={({ isActive }) => cn({ "active-link": isActive })}>
          Рейтинг
        </NavLink>
      </nav>
      <NavLink to="/login" className={({ isActive }) => isActive ? "active-link" : ""}>
        <button className="login-btn">Login</button>
      </NavLink>
    </header>
  );
};

export default Navigation;