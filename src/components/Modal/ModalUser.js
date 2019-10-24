import React, { Component } from 'react';

import fbIcon from '../../assets/img/social/facebook.svg';
import wpIcon from '../../assets/img/social/whatsapp.svg';
import tgIcon from '../../assets/img/social/telegram.svg';
import closeIcon from '../../assets/img/close.svg';
import likeIco from '../../assets/img/chevron-up.svg';
import './Modal.css'
import './ModalUser.css';
import textShortener from '../Utils/textShortener';

let likeStyle = {
  backgroundSize: 'cover'
}

class ModalUser extends Component {

  handleStatus = (e) => {
    let modalBgChecker = e.target.className.includes('modal-background');
    let closeBtnChecker = e.target.className.includes('modal-close-btn');
    if (modalBgChecker || closeBtnChecker) this.props.modalStatusChanger();
  }

  handleLike = (event, item) => {
    event.stopPropagation();
    const index = this.props.data.index;
    this.props.changeData(item, 'total_likes', index);
  }

  showData = () => {
    const status = this.props.modalStatus;
    const navBar = document.querySelector('.header');
    const data = this.props.data;

    if(status) navBar.style.filter = 'blur(30px)'
    else if (navBar !== null) navBar.style.filter = 'blur(0)';
    if(data.category === undefined) return null
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
                  {textShortener(data.title, 48)}
                </h2>
                <div className="modal-img-container">
                  <img src={data.image} alt="trouble" className="modal-img" />
                </div>
                <div className="modal-info">
                  <div onClick={(event) => this.handleLike(event, data)} className="modal-info__likes">
                    Поддержали
                    <i className='modal-info__likes-ico' style={{ ...likeStyle, backgroundImage: `url(${likeIco})` }}></i>
                    {data.total_likes}
                  </div>
                  <div className="modal-info__category">{data.category.category}</div>
                  <div className="modal-info__date">3 дня</div>
                </div>
                <div className="modal-share">
                  <div className="modal-social">
                    <i className="modal-social__icon">
                      <img alt="social-icon" src={fbIcon} />
                    </i>
                    <i className="modal-social__icon">
                      <img alt="social-icon" src={tgIcon} />
                    </i>
                    <i className="modal-social__icon">
                      <img alt="social-icon" src={wpIcon} />
                    </i>
                  </div>
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