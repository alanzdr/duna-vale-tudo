import React from 'react';

import moneyIcon from '../../../../assets/icons/money-safe.svg'
import changeCarIcon from '../../../../assets/icons/change-vehicle.svg'
import VerifiedIcon from '../../../../assets/icons/verified.svg'

import './styles.css';

function SectionBreak() {
  return (
    <section id="section-break" className='container'>
      <div className="text-left">
        <p>
          As melhores condições para você comprar seu seminovo com 
          <strong>
            {' garantia, procedência, supervalorização do seu usado e aprovação na hora! *'}
          </strong>
        </p>
      </div>
      <p className="warning">*Mediante análise de crédito. Consulte condições na concessionária.</p>
      <p className="safety-online">
        <img src={VerifiedIcon} alt="Icone de Retorno Financeiro"/>
        Negociação 100% online e segura
      </p>
      <div className="box-content">
        <div className="box">
          <img src={moneyIcon} alt="Icone de dinheiro na mão"/>
          <div className="text">
            <p className='low'>Até 100%</p>
            <p>da FIPE</p>
          </div>
        </div>
        <div className="box">
          <img src={changeCarIcon} alt="Icone de Troca de carro"/>
          <div className="text">
            <p>Usado<br />na troca</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionBreak;