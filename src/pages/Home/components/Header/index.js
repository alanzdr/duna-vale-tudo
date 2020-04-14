import React from 'react';

import Countdown from '../../../../components/Countdown'

import Background from '../../../../assets/objects/background';
import HeaderCars from '../../../../assets/objects/header-cars';
import Logo from '../../../../assets/objects/logo';
import WarningIcon from '../../../../assets/icons/warning-bigger.svg';

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
      <picture>
        <source srcSet={HeaderCars.webp} type="image/webp"/>
        <img className='header-cars' src={HeaderCars.png} alt="Vale tudo para fechar negó"/>
      </picture>
      <div className="countdown">
        <div className="text">
          <img src={WarningIcon} alt="Icone de atenção"/>
          <p>
            <strong>Atenção: </strong>
            Essas ofertas acabam em
          </p>
        </div>
        <Countdown />
      </div>
    </header>
  )
};

export default Header;
