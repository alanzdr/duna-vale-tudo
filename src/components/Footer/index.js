import React from 'react';
import Background from '../../assets/objects/background';

import './styles.css';

const Footer = () => (
  <footer>
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
    <p>Feirão Vale Tudo Fiat Duna 2020</p>
  </footer>
);

export default Footer;
