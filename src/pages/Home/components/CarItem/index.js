import React from 'react';


// import { Container } from './styles';
import "./styles.css";

const CarItem = ({info}) => (
  <div to={`/${info.key}`} className="car-box">
    <div className="name">
      <h2>{info.name.main}</h2>
      <h3>{info.name.sub}</h3>
    </div>
    <div className="extra">
      <p>{info.extra}</p>
    </div>
    <div className="image">
      <img src={info.data.pics[0]} alt={info.data.name}/>
    </div>
    <div className="installment">
      <p>1ªParcela para 60 dias</p>
    </div>
    <div className="price">
      <p className="from">
        de {info.data.price} por
      </p>
      <p className="to">
        R$
        <strong>{info.promotion}</strong>
        ,00
      </p>
    </div>
    <div className="button">
      <p>EU QUERO!</p>
    </div>
  </div>
);

export default CarItem;
