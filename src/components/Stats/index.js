import React, { Component } from 'react';

import NavBar from '../NavBar/NavBar';
import './index.css';

class Stats extends Component {
  render() {
    return (
      <>
        <NavBar />
        <div className="default-container stats-body">
          <div className="circles">
            <div className="stat-box">
              <div className="circle" id="c1">999</div>
              <div className="stat-title">
                title1
              </div>
            </div>
            <div className="stat-box">
              <div className="circle" id="c2">165</div>
              <div className="stat-title">
                title1
              </div>
            </div>
            <div className="stat-box">
              <div className="circle" id="c3">12</div>
              <div className="stat-title">
                title1
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Stats;