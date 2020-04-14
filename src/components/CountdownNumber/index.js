import React from 'react';

// import { Container } from './styles';
import digitsBackground from '../../assets/objects/digits'
import "./styles.css";

const CountdownNumber = ({numArray, text}) => (
  <div className='digits-container'>
    <div className="digits">
      <div className="digit">
        <picture>
          <source srcSet={digitsBackground.webp} type="image/webp"/>
          <img src={digitsBackground.png} alt="Digito"/>
        </picture>
        <p>{numArray[0]}</p>
      </div>
      <div className="digit right">
        <picture>
          <source srcSet={digitsBackground.webp} type="image/webp"/>
          <img src={digitsBackground.png} alt="Digito"/>
        </picture>
        <p>{numArray[1]}</p>
      </div>
    </div>
    <p className="subtext">{text}</p>
  </div>
);

export default CountdownNumber;
