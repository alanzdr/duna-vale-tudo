import React from 'react';
import { Link } from 'react-router-dom';

import { getWhatsLink } from '../../../../utils/whatsapp'
import WhatsappIcon from '../../../../assets/icons/whatsapp.svg'
import TimeIcon from '../../../../assets/icons/time.svg'
import BackIcon from '../../../../assets/icons/back.svg'
import { useAnalytics } from '../../../../utils/analytics'

import Galery from '../Galery';
import CountdownText from '../CountdownText';
import './styles.css';

const Infos = ( { isMobile, data, path } ) =>  {
  const analytics = useAnalytics();

  const handleWithButtonClick = (eventLabel) => {
    analytics.event.whatsapp(eventLabel);
    if("fbq" in window) {
      window.fbq('track', 'Contact');
    }
  }
  
  return (
    <div id='car-details-text'>
      <Link className='back' to={{pathname: '/', state: { path }}}>
        <img src={BackIcon} alt="Voltar"/>
        Voltar para as ofertas
      </Link>
      <div className='title'>
        <h1>{data.name.main}</h1>
        <h2>{`${data.data.year} ${data.name.sub}`}</h2>
      </div>
      {isMobile ? (
        <Galery data={data} />
      ) : null}
      <div className="extras">
        <p className="installment">1ª Parcela para 90 dias</p>
        <p className="extra-box">taxas de 0,55%</p>
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
      <p className="buttons-title">
        Entre em contato com a concessionária mais próxima de você:
      </p>
      <div className="buttons-container">
        <a 
          onClick={() => handleWithButtonClick('Araranguá')} 
          className="button" 
          href={getWhatsLink('5548991835855')} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <p>Araranguá</p>
          <img src={WhatsappIcon} alt="Whatsapp logo"/>
        </a>
        <a 
          onClick={() => handleWithButtonClick('Criciúma')} 
          className="button" 
          href={getWhatsLink('5548991835855')} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <p>Criciúma</p>
          <img src={WhatsappIcon} alt="Whatsapp logo"/>
        </a>
        <a 
          onClick={() => handleWithButtonClick('Tubarão')} 
          className="button" 
          href={getWhatsLink('554836210461')} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <p>Tubarão</p>
          <img src={WhatsappIcon} alt="Whatsapp logo"/>
        </a>
      </div>
      <div className="warning">
        <img src={TimeIcon} alt="Icone de tempo"/>
        <p>
          Essas ofertas são válidas
          <CountdownText />
        </p>
      </div>
    </div>
  );
}


export default Infos;
