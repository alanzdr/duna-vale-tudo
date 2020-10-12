import React from 'react';

import Countdown from '../Countdown'
import Picture from '../../../../components/Picture'

// Assets
import HeaderBackground from '../../../../assets/images/header-background.webp'
import HeaderBackgroundPng from '../../../../assets/images/header-background.png'
import HeaderBackground1366 from '../../../../assets/images/header-background-1366.webp'
import HeaderBackground1000 from '../../../../assets/images/header-background-1000.webp'
import HeaderBackground400 from '../../../../assets/images/header-background-400.webp'

import Logo from '../../../../assets/images/logo.webp'
import LogoPng from '../../../../assets/images/logo.png'
import TimeIcon from '../../../../assets/icons/time.svg'

import "./styles.css"

const Header = () => {
  return (
    <header id='home-header'>
      <Picture 
        source={[
          { type: 'image/webp', media: '(max-width: 400px)', src: HeaderBackground400 },
          { type: 'image/webp', media: '(max-width: 1000px)', src: HeaderBackground1000 },
          { type: 'image/webp', media: '(max-width: 1366px)', src: HeaderBackground1366 },
          { type: 'image/webp', src: HeaderBackground }
        ]}
        className='background' 
        src={HeaderBackgroundPng} 
        alt="Imagem de fundo"
        loading="auto"
      />
      <div id='header-content' className='container'>
        <div className="logo">
          <Picture 
            source={[{ type: 'image/webp', src: Logo }]}
            src={LogoPng} 
            alt="Seminovos Fiat Duna"
            loading="auto"
          />
        </div>
        <div className="countdown">
          <h2>
            <img src={TimeIcon} alt="Icone de tempo"/>
            Essas ofertas acabam em:
          </h2>
          <Countdown />
        </div>
      </div>
    </header>
  )
};

export default Header;
