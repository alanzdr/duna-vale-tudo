import React from 'react';

import Countdown from '../Countdown'

// Assets
import HeaderImagePng from '../../../../assets/images/header.png'
import Logo from '../../../../assets/images/logo.svg'
import VerifiedIcon from '../../../../assets/icons/verified.svg'
import TimeIcon from '../../../../assets/icons/time.svg'
import "./styles.css"

const Header = () => {
  return (
    <header id='home-header'>
      <div id='countdown-container' className='container'>
        <picture>
          <img className='cars-image' src={HeaderImagePng} alt="Carros"/>
        </picture>
        <div className="countdown">
          <h2>
            <img src={TimeIcon} alt="Icone de tempo"/>
            Essas ofertas acabam em:
          </h2>
          <Countdown />
        </div>
      </div>
      <div id="logo-container" className='container'>
        <div className="logo">
          <picture>
            <img className='logo' src={Logo} alt="Seminovos Fiat Duna"/>
          </picture>
        </div>
        <p className='online'>
          <img src={VerifiedIcon} alt="Icone de segurança"/>
          Negociação 100% online e segura
        </p>
      </div>
      <div className="background-square"></div>
    </header>
  )
};

export default Header;
