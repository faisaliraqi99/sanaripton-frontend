import React from 'react';

import textShortener from '../Utils/textShortener';
import likeIco from '../../assets/img/chevron-up.svg';

let likeStyle = {
  backgroundSize: 'cover'
}

let tazalykStyle = {
  backgroundSize: 'cover'
}


let Card = (props) => {
  const data = props.data;
  const isReady = props.isReady ? 'card-ready' : '';

  const handleClick = (item) => {
    props.handleClick(item);
  }

  const handleLike = (event, item, index) => {
    event.stopPropagation();

    props.changeData(item, 'total_likes', index)
  }

  return (
    data.map((item, index) => {
      const category = item.category ? item.category.category : '';
      const title = item.title;
      item.total_likes = 0; // Убрать
      console.log(item);
      return (
        <div onClick={(e) => handleClick(e, item)} className={`card-client ${isReady}`} key={index}>
          <div className="card-content">
            <p className="card-content__org">{category}</p>
            <p className="card-content__title">{textShortener(title)}</p>
            <div onClick={(event) => handleLike(event, item, index)} className="card-content__likes">
              <i style={{ ...likeStyle, backgroundImage: `url(${likeIco})` }} className="card-content__likes-icon"></i>
              <span className="card-content__likes-num">{item.total_likes}</span>
            </div>
          </div>
          <div
            style={{ ...tazalykStyle, backgroundImage: `url(${item.image})` }}
            className="card-photo">
          </div>
        </div>
      )
    })
  );
}

export default Card;