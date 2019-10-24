import React, { Component } from 'react';

import './About.css';
import NavBar from '../NavBar/NavBar';

class About extends Component {
  render() {
    return (
      <div className="about">
        <NavBar />
        <div className="default-container">
          About
        </div>
      </div>
    );
  }
}

export default About;