import React from 'react';

import Countdown from '../Countdown'
import Picture from '../../../../components/Picture'
import HeaderLogo from '../../../../components/HeaderLogo'


// Assets
import Title from '../../../../assets/objects/title'
import TimeIcon from '../../../../assets/icons/time.svg'
import VerifiedIcon from '../../../../assets/icons/verified.svg'
import Background from '../../../../assets/images/header-background.svg'
import "./styles.css"

const Header = () => {
  return (
    <header id='home-header'>
      <HeaderLogo />
      <div id="countdown-container" className='container'>
        <img 
          className='header-background'
          src={Background} 
          alt="Fundo"
        />
        <div className="title">
          <Picture
            src={Title.desktop.png}
            alt='Vale tudo para fechar negócio com você!'
            formats={Title.desktop}
            sources={[
              {
                media: '(max-width: 1000px)',
                formats: Title.mobile
              }
            ]}
          />
        </div>
        <div className="countdown">
          <h2>
            <img src={TimeIcon} alt="Icone de tempo"/>
            Essas ofertas acabam em:
          </h2>
          <Countdown />
          <div className="safety-info">
            <p className='top'>Compre seu seminovo agora mesmo!</p>
            <p className='bot'>
              <img src={VerifiedIcon} alt="Icone de segurança"/>
              Negociação 100% online e segura
            </p>
          </div>
        </div>
      </div>
    </header>
  )
};

export default Header;
