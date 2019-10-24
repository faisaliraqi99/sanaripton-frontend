import React, { Component } from 'react';
import axios from 'axios';
// import mockData from './mockData';

import NavBar from '../NavBar/NavBar';
import './Kanban.css';
import KanbanUser from './KanbanUser';

class KanbanData extends Component {
  state = {
    data: {
      todo: [{
        title: 'Загрузка'
      }],
      doing: [{
        title: 'Загрузка'
      }],
      done: [{
          title: 'Загрузка'
      }]
    }
  }
  componentDidMount() {
    this.fetchData()
  }
  fetchData = async () => {
    const size = {
      page_size: 20,
    }

    let responseTodo = await axios.get('http://194.67.210.80/api/', {params: {...size, 'status': 1}});
    let responseDoing = await axios.get('http://194.67.210.80/api/', { params: {...size, 'status': 2}});
    let responseReady = await axios.get('http://194.67.210.80/api/', { params: {...size, 'status': 3}});

    this.setState({
      data: {
        todo: responseTodo.data.results,
        doing: responseDoing.data.results,
        done: responseReady.data.results
      }
    })
  }
  changeData = (newData) => {
    this.setState({
      data: newData
    })
  }
  render() {
    const data = this.state.data;
    if(this.props.isAdmin) {
      return (
        <>
          <NavBar />
          <KanbanUser
            changeData={this.changeData}
            data={data}
          />
        </>
      )
    } else {
      return (
        <>
          <NavBar />
          <KanbanUser
            changeData={this.changeData}
            data={data}
          />
        </>
      )
    }
  }
}

export default KanbanData;