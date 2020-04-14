import React from 'react';

import { getWhatsLink } from '../../../../utils/whatsapp'
import WhatsappLogo from '../../../../assets/icons/whatsapp.svg'
import WarningLogo from '../../../../assets/icons/warning.svg'

import Galery from '../Galery';
import CountdownText from '../CountdownText';
import './styles.css';

const handleWithButtonClick = (eventLabel) => {
  if("ga" in window) {
    const tracker = window.ga.getAll()[0];
    if (tracker) {
      tracker.send('event', {
        eventCategory: 'feirao-vale-tudo',
        eventAction: 'click',
        eventLabel,
        transport: 'beacon'
      });
    }
  }
  if("fbq" in window) {
    window.fbq('track', 'Contact');
  }
}

const Infos = ( { isMobile, data } ) =>  (
  <div id='car-details-text'>
    <div className='title'>
      <h1>{data.name.main}</h1>
      <h2>{data.name.sub}</h2>
    </div>
    {isMobile ? (
      <Galery data={data} />
    ) : null}
    <div className="extras">
      <p className="installment">1ª Parcela para 60 dias</p>
      <p className="extra-box">{data.extra}</p>
    </div>
    <div className="price">
      {data.data.price ? (
        <p className="from">
          de {data.data.price} por apenas
        </p>
      ) : null}
      <p className="to">
        R$
        <strong>{data.promotion}</strong>
        ,00
      </p>
    </div>
    <div className="buttons-container">
      <a 
        onClick={handleWithButtonClick} 
        className="button" 
        href={getWhatsLink('5548991835855')} 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <p>Araranguá</p>
        <img src={WhatsappLogo} alt="Whatsapp logo"/>
      </a>
      <a 
        onClick={handleWithButtonClick} 
        className="button" 
        href={getWhatsLink('5548991835855')} 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <p>Criciúma</p>
        <img src={WhatsappLogo} alt="Whatsapp logo"/>
      </a>
      <a 
        onClick={handleWithButtonClick} 
        className="button" 
        href={getWhatsLink('554836210461')} 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <p>Tubarão</p>
        <img src={WhatsappLogo} alt="Whatsapp logo"/>
      </a>
    </div>
    <div className="warning">
      <img src={WarningLogo} alt="Icone de atenção"/>
      <p>
        <span>Atenção: </span> 
        Essas ofertas são válidas
        <CountdownText />
      </p>
    </div>
  </div>
);


export default Infos;
