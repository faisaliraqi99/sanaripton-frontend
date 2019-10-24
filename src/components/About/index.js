import React, { Component } from 'react';

import Img from '../../assets/img/aboutImgs/screen_1.jpg';

import './About.css';
import NavBar from '../NavBar/NavBar';

class About extends Component {
  render() {
    return (
      <div className="about">
        <NavBar />
        <div className="default-container">
          {/* <div className="screen"></div> */}
          <img className="screen-img" alt="firstImg" src={Img} />
        </div>
      </div>
    );
  }
}

export default About;