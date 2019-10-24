import React, { Component } from 'react';

import closeIcon from '../../assets/img/close.svg';
import testImg from '../../assets/img/troubles/test1.jpg';
import mockData from './mockData';
import './Modal.css'
import './ModalUser.css';

class ModalUser extends Component {
  state = {
    data: {}
  }
  componentDidMount() {
    this.setState({
      data: mockData
    })
  }
  handleStatus = (e) => {
    let modalBgChecker = e.target.className.includes('modal-background');
    let closeBtnChecker = e.target.className.includes('modal-close-btn');
    if (modalBgChecker || closeBtnChecker) this.props.modalStatusChanger();
  }
  showData = () => {
    const status = this.props.modalStatus;
    let navBar = document.querySelector('.header');
    if(status) navBar.style.filter = 'blur(30px)'
    else if (navBar !== null) navBar.style.filter = 'blur(0)';
    return (
      <>
        <div onClick={this.handleStatus} className={`modal-background ${status ? 'active' : ''}`}>
          <div className="modal-container">
            <div className="modal">
              <div className="modal-close-container">
                <img onClick={this.handleStatus} className="modal-close-btn" alt="close-btn" src={closeIcon}></img>
              </div>
              <div className="modal-content">
                <h2 className="modal-title">
                  Мусор валяется и бесит...
                </h2>
                <div className="modal-img-container">
                  <img src={testImg} alt="trouble" className="modal-img" />
                </div>
                <div className="modal-info">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  render() {
    return this.showData();
  }
}

export default ModalUser;