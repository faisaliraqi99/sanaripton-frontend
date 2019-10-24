import React, { Component } from 'react';

import mockData from './mockData';
import './Modal.css'

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
    let closeBtnChecker = e.target.className.includes('modal-background');
    if (modalBgChecker || closeBtnChecker) this.props.modalStatusChanger();
  }
  showData = () => {
    const status = this.props.modalStatus;
    let navBar = document.querySelector('.navbar');
    if(status) navBar.style.filter = 'blur(30px)'
    else if (navBar !== null) navBar.style.filter = 'blur(0)';
    return (
      <>
        <div onClick={this.handleStatus} className={`modal-background ${status ? 'active' : ''}`}>
          <div className="modal-container">
            <div className="modal">
              <div className="modal-close-container">
                <div className="modal-close-btn">X</div>
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