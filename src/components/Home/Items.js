import React, { Component } from 'react';
import axios from 'axios';
import textShortener from '../Utils/textShortener';

import ModalUser from '../Modal/ModalUser';
import likeImg from '../../assets/img/chevron-up.svg';

const cover = {
  backgroundSize: 'cover'
}

class Items extends Component {
  state = {
    data: [],
    modalStatus: false,
    modalData: {}
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
  modalStatusChanger = (item, index, isUpdate = false) => {
    const itemWithIndex = { ...item, index };
    this.setState({
      modalStatus: isUpdate ? true : false,
      modalData: itemWithIndex,
    });
  }
  changeData = (data) => {
    console.log(data);
  }
  render() {
    const data = this.state.data;
    const modalData = this.state.modalData;
    const modalStatus = this.state.modalStatus;
    return (
      <>
        <ModalUser
          data={modalData}
          changeData={this.changeData}
          modalStatusChanger={this.modalStatusChanger}
          modalStatus={modalStatus}
        />
        {data.map((item, index) => {
          let color = '';
          if(item.status === 1) color = '#FF3F3F'
          else if (item.status === 2) color = '#FFB822'
          else if (item.status === 3) color = '#10B759'
          else color = '#c7c7c7'
          let itemStyle = modalStatus ? {
              filter: 'blur(20px)',
              border: `2px solid ${color}`
          } : {
              border: `2px solid ${color}`
            }
          return (
            <div
              onClick={() => this.modalStatusChanger(item, index, true)}
              key={item.id}
              style={itemStyle}
              className="home-item"
            >
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