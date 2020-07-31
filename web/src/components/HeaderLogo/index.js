import React from 'react';
import { Link } from 'react-router-dom'

import Picture from '../Picture';
import Logo from '../../assets/objects/logo';
import './styles.css';

const HeaderLogo = () => (
  <div id="black-header">
    <Link to='/'>
      <Picture
        src={Logo.png}
        alt='Feirão Vale Tudo Duna'
        formats={Logo}
      />
    </Link>
  </div>
);

export default HeaderLogo;
