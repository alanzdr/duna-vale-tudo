import React from 'react';
import { Link } from 'react-router-dom'

import { toCurrency } from '../../../../utils/number'
import timeIcon from '../../../../assets/icons/timer90.svg'
import moneyBackIcon from '../../../../assets/icons/money-back.svg'
// import taxIcon from '../../../../assets/icons/tax.svg'


// import { Container } from './styles';
import "./styles.css";

const Car = ({car}) => {  
  return (
    <Link
      to={`/${car.id}`} 
      className={`item car-${car.id}`}
    >
      <div className="car-box">
        <div className="image-container">
          <div className={'image'}>
            <img src={car.thumb} alt={car.fullName}/>
          </div>
        </div>

        <div className="name">
          <h2>{car.name[0]}</h2>
          <h3>{`${car.year} ${car.name[1]}`}</h3>
        </div>

        <div className="price">
          {car.price ? (
            <p className="from">
              de R$ {toCurrency(car.price)},00 por
            </p>
          ) : null}
          <p className="to">
            R$
            <strong> {toCurrency(car.promotion)}</strong>
            ,00
          </p>
        </div>
        
        <div className="tax-content">
          <div className="tax-item">
            <img src={timeIcon} alt="Icone de periodo de 90 dias"/>
            <div className="text">
              <p className='low'>primeira parcela</p>
              <p>para 90 dias!</p>
            </div>
          </div>
          <div className="tax-item">
            <img src={moneyBackIcon} alt="Icone de periodo de 90 dias"/>
            <div className="text">
              <p>troco na troca</p>
            </div>
          </div>
        </div>
        
        <div className="button">
          <p>Eu quero esta oferta!</p>
        </div>
      </div>
    </Link>
  );
}

export default Car;
