import React from 'react';
import { Link } from 'react-router-dom';

import { getWhatsLink } from '../../../../utils/whatsapp'
import { useAnalytics } from '../../../../utils/analytics'
import { toCurrency } from '../../../../utils/number'
import useLocalization from '../../../../hooks/useLocalization'
import Galery from '../Galery';
import CountdownText from '../CountdownText';

// assets
import TimeIcon from '../../../../assets/icons/time.svg'
import WhatsappIcon from '../../../../assets/icons/whatsapp.svg'
import BackIcon from '../../../../assets/icons/back.svg'
import timeIcon from '../../../../assets/icons/timer90.svg'
import moneyBackIcon from '../../../../assets/icons/money-back.svg'
import './styles.css';

const Infos = ( { isMobile, car, id } ) =>  {
  const analytics = useAnalytics();
  const { city } = useLocalization();

  const handleWithButtonClick = (eventLabel) => {
    analytics.event.whatsapp(eventLabel);
    if("fbq" in window) {
      window.fbq('track', 'Contact');
    }
  }
  
  return (
    <div id='car-details-text'>
      <Link className='back' to={{pathname: '/', state: { id }}}>
        <img src={BackIcon} alt="Voltar"/>
        Voltar para as ofertas
      </Link>
      <div className='title'>
        <h1>{car.name[0]}</h1>
        <h2>{`${car.year} ${car.name[1]}`}</h2>
      </div>
      <div className="extras">
        <div className="item">
          <img src={timeIcon} alt="Icone de periodo de 90 dias"/>
          <div className="low text">
            <p className='up'>primeira parcela</p>
            <p>para 90 dias!</p>
          </div>
        </div>
        <div className="item">
          <img src={moneyBackIcon} alt="Icone de Retorno Financeiro"/>
          <div className="text">
            <p>troco na troca</p>
          </div>
        </div>
      </div>
      {isMobile ? (
        <Galery data={car} />
      ) : null}
      <div className="price">
        {car.price ? (
          <p className="from">
            de R$ {toCurrency(car.price)} por apenas
          </p>
        ) : null}
        <p className="to">
          R$
          <strong> {toCurrency(car.promotion)}</strong>
          ,00
        </p>
      </div>
      <div className="buttons-container">
        <a 
          onClick={() => handleWithButtonClick()} 
          className="button" 
          href={getWhatsLink(city)} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <p>Chamar no whatsapp</p>
          <img src={WhatsappIcon} alt="Whatsapp logo"/>
        </a>
        <div className="warning">
          <img src={TimeIcon} alt="Icone de tempo"/>
          <p>
            Essa oferta é válida por apenas
            <CountdownText />
          </p>
        </div>
      </div>
    </div>
  );
}


export default Infos;
