import React from 'react';


// import { Container } from './styles';
import "./styles.css";

const capitalize = (str) => {
  var splitStr = str.toLowerCase().split(' ');
  return splitStr.map((val) => {
    if (val.length > 2) {
      return val.charAt(0).toUpperCase() + val.substring(1);
    }
    return val;
  }).join(' ');
}

const CarItem = ({info}) => (
  <div to={`/${info.key}`} className="car-box">
    <div className="image-container">
      <div className="image">
        <img src={info.data.pics[0]} alt={info.data.name}/>
      </div>
    </div>

    <div className="name">
      <h2>{info.name.main}</h2>
      <h3>{`${info.data.year} ${info.name.sub}`}</h3>
    </div>

    <div className="price">
      {info.data.price ? (
        <p className="from">
          de {info.data.price} por
        </p>
      ) : null}
      <p className="to">
        R$
        <strong> {info.promotion}</strong>
        ,00
      </p>
      <div className="line"></div>
    </div>
    
    <div className="extra">
      <p>{capitalize(info.extra)}</p>
    </div>
    <div className="installment">
      <p>1ªParcela para 60 dias</p>
      <div className="line"></div>
    </div>
    
    <div className="button">
      <p>Eu quero esta oferta!</p>
    </div>
  </div>
);

export default CarItem;
