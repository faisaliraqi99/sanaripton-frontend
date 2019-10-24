import React, { Component } from 'react';

import Items from './Items';
import NavBar from '../NavBar/NavBar';
import './home.css';

class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <NavBar />
        <div className="default-container">
          <Items />
        </div>
      </div>
    );
  }
}

export default Home;