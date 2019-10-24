import React, { Component } from 'react';

import NavBar from '../NavBar/NavBar';
import './home.css';

class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <NavBar />
        <div className="default-container">
          <div className="home-item">
            <div className="home-img"></div>
          </div>
          <div className="home-item">
            <div className="home-img"></div>
          </div>
          <div className="home-item">
            <div className="home-img"></div>
          </div>
          <div className="home-item">
            <div className="home-img"></div>
          </div>
          <div className="home-item">
            <div className="home-img"></div>
          </div>
          <div className="home-item">
            <div className="home-img"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;