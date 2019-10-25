import React, { Component } from 'react';

import NavBar from '../NavBar/NavBar';
import './index.css';

import DoughnutChart from './canvas_js/views/pie & funnel charts/Doughnut Chart';
import optnsOfDonut from './datas.js'

class Stats extends Component {
  render() {
    return (
      <>
        <NavBar />
        <div className='default-container stats-body'>
          <DoughnutChart options={optnsOfDonut[0]}/>
          <div style={{'height': '100px'}}>
          </div>
          <DoughnutChart options={optnsOfDonut[1]}/>
        </div>
      </>
    );
  }
}

export default Stats;