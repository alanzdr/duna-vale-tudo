import React from 'react';
import { Link } from 'react-router-dom'

import Picture from '../../../../components/Picture'
import { toCurrency } from '../../../../utils/number'
import moneyIcon from '../../../../assets/icons/money-safe.svg'
import changeCarIcon from '../../../../assets/icons/change-vehicle.svg'
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
            <Picture 
              src={car.thumb} 
              alt={car.fullName}
            />
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
            <img src={moneyIcon} alt="Icone de dinheiro na mão"/>
            <div className="text">
              <p className='low'>Parcelamento</p>
              <p>em até 60X</p>
            </div>
          </div>
          <div className="tax-item">
            <img src={changeCarIcon} alt="Icone de Troca de carro"/>
            <div className="text">
              <p>Usado<br />na troca</p>
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
