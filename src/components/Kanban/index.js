import React, { Component } from 'react';
import axios from 'axios';
import mockData from './mockData';

import NavBar from '../NavBar/NavBar';
import './Kanban.css';
import KanbanUser from './KanbanUser';

class KanbanData extends Component {
  state = {
    data: {
      todo: [],
      doing: [],
      done: []
    }
  }
  componentDidMount() {
    this.fetchData()
  }
  fetchData = async () => {
    let response = await axios.get('http://194.67.210.80/api/');
    console.log(response)

    this.setState({
      data: mockData
    })
  }
  render() {
    const data = this.state.data;

    if(this.props.isAdmin) {
      return (
        <>
          <NavBar />
          <KanbanUser data={data} />
        </>
      )
    } else {
      return (
        <>
          <NavBar />
          <KanbanUser data={data} />
        </>
      )
    }
  }
}

export default KanbanData;