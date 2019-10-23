import React from 'react';

let likeStyle = {
  backgroundSize: 'cover'
}

let tazalykStyle = {
  backgroundSize: 'cover'
}

let Card = (props) => {
  const data = props.data;
  const likeIco = props.likeIco;
  const tazalykImg = props.tazalykImg;
  console.log(data);
  return (
    data.map((item, index) => {
      const category = item.category;
      const title = item.title;
      return (
        <div className="card-client" key={index}>
          <div className="card-content">
            <p className="card-content__org">{category.toUpperCase()}</p>
            <p className="card-content__title">{title}...</p>
            <div className="card-content__likes">
              <i style={{ ...likeStyle, backgroundImage: `url(${likeIco})` }} className="card-content__likes-icon"></i>
              <span className="card-content__likes-num">125 ПОДНЯТЬ</span>
            </div>
          </div>
          <div
            style={{ ...tazalykStyle, backgroundImage: `url(${tazalykImg})` }}
            className="card-photo">
          </div>
        </div>
      )
    })
  );
}

export default Card;