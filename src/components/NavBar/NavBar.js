import React, { Component } from 'react';

import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div className="header">
        <div className="navbar header-left">
        <a className="nav" href="#">Logo</a>
        <a className="nav" href="#">Бот</a>
        <a className="nav" href="#">Статистика</a>
        <a className="nav" href="#">О нас</a>
        </div>

        <div className="header-right">
          <a className="login" href="#">login</a>
        </div>
      </div>
    );
  }
}

export default NavBar;