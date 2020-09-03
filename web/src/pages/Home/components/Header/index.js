import React from 'react';

import Countdown from '../Countdown'

// Assets
import HeaderImagePng from '../../../../assets/images/header.png'
import HeaderImage from '../../../../assets/images/header.webp'
import HeaderImage1366 from '../../../../assets/images/header-1366.webp'
import HeaderImage1000 from '../../../../assets/images/header-1000.webp'
import HeaderImage400 from '../../../../assets/images/header-400.webp'
import Logo from '../../../../assets/images/logo.svg'
import VerifiedIcon from '../../../../assets/icons/verified.svg'
import TimeIcon from '../../../../assets/icons/time.svg'
import "./styles.css"

const Header = () => {
  return (
    <header id='home-header'>
      <picture>
        <source type="image/webp" media="(max-width: 375px)" srcSet={HeaderImage400} />
        <source type="image/webp" media="(max-width: 1000px)" srcSet={HeaderImage1000} />
        <source type="image/webp" media="(max-width: 1366px)" srcSet={HeaderImage1366} />
        <source type="image/webp" srcSet={HeaderImage} />
        <img className='cars-image' src={HeaderImagePng} alt="Carros"/>
      </picture>
      <div id='countdown-container' className='container'>
        
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
          <img className='logo' src={Logo} alt="Seminovos Fiat Duna"/>
        </div>
        <p className='online'>
          <img src={VerifiedIcon} alt="Icone de segurança"/>
          Negociação 100% online e segura
        </p>
      </div>
    </header>
  )
};

export default Header;
