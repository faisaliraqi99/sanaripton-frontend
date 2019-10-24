import React, { Component } from 'react';
import {  Link } from "react-router-dom";

import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div className="header">
        <div className="navbar-left">
          <Link to="/" className="nav">Главная</Link>
          <Link to="/kanban" className="nav">Доска</Link>
          <a rel="noopener noreferrer" className="nav" target="_blank" href="https://t.me/citykg_bot">Бот</a>
          <Link to="/stats" className="nav">Статистика</Link>
          <Link to="/about" className="nav">О нас</Link>
        </div>

        <div className="navbar-right">
          <Link to="/auth" className="login">Войти</Link>
        </div>
      </div>
    );
  }
}

export default NavBar;