import React, { useEffect } from 'react'

import useLocalization from '../../hooks/useLocalization'

import './styles.css';

const Localization = () => {
  const { city, select } = useLocalization();
  const body = document.querySelector('body');

  useEffect(() => {
    if (city < 0) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
  }, [body.style.overflow, city])

  // Criciúma = 0
  // Tubarão = 1
  // Imbituba = 2
  // Araranguá = 3

  return (
    <div id='localization' className={city >= 0 ? 'enabled' : ''}>
      <div className="box">
        <div className="box-header">
          <h2>Selecione sua localização:</h2>
        </div>
        <div className="options">
          <div className="item" onClick={() => select(3)}>Araranguá</div>
          <div className="item" onClick={() => select(0)}>Criciúma</div>
          <div className="item" onClick={() => select(2)}>Imbituba</div>
          <div className="item" onClick={() => select(1)}>Tubarão</div>
        </div>
      </div>
    </div>
  )
}

export default Localization;