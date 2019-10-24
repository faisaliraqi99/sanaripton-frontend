import React, { Component } from 'react';
import axios from 'axios';
import textShortener from '../Utils/textShortener';

import likeImg from '../../assets/img/chevron-up.svg';

const cover = {
  backgroundSize: 'cover'
}

class Items extends Component {
  state = {
    data: []
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData = async () => {
    const params = {
      page_size: 100,
    }
    let response = await axios.get('http://194.67.210.80/api', {params});
    this.setState({
      data: response.data.results
    })
  }
  render() {
    const data = this.state.data;
    return (
      <>
        {data.map(item => {
          let color = '';
          if(item.status === 1) color = '#FF3F3F'
          else if (item.status === 2) color = '#FFB822'
          else if (item.status === 3) color = '#10B759'
          else color = '#c7c7c7'
          return (
            <div key={item.id} style={{ border: `2px solid ${color}`}} className="home-item">
              <div style={{ ...cover, backgroundImage: `url(${item.image})`}} className="home-img"></div>
              <div className="home-item__description">
                <h3 className="home-item__title">{textShortener(item.title)}</h3>
                <div style={{backgroundColor: color}} className="home-likes">
                  <span className="card-content__likes-num">{item.total_likes}</span>
                  <i style={{ ...cover, backgroundImage: `url(${likeImg})` }} className="home-like"></i>
                </div>
              </div>
            </div>
          )
        })}
      </>
    );
  }
}

export default Items;