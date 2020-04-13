import React from 'react';

import Countdown from '../../../../components/Countdown'

import Background from '../../../../assets/objects/background';
import Logo from '../../../../assets/objects/logo';
import "./styles.css"

const Header = () => {
  return (
    <header id='home-header'>
      {/* Background */}
      <picture>
        <source
          media="(max-width: 1440px)"
          type="image/webp"
          srcSet={Background.webp}
        />
        <source
          media="(max-width: 1440px)"
          type="image/jpeg"
          srcSet={Background.jpeg}
        />
        <source srcSet={Background.webp2x} type="image/webp"/>
        <img className='background' src={Background.jpeg2x} alt="Fundo Feirão vale tudo Duna"/>
      </picture>
      <picture>
        <source srcSet={Logo.webp} type="image/webp"/>
        <img className='logo' src={Logo.png} alt="Feirão vale tudo Duna"/>
      </picture>
      <div className="countdown">
        <h4>Essas ofertas são válidas até</h4>
        <Countdown />
      </div>
    </header>
  )
};

export default Header;
