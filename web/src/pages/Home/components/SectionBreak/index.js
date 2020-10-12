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
          As melhores <strong>ofertas e condições exclusivas </strong> 
          para você comprar seu seminovo com garantia, procedência e 
          até 100% de financiamento. *
        </p>
      </div>
      <p className="warning">*Sujeito à aprovação bancária. </p>
      <p className="safety-online">
        <img src={VerifiedIcon} alt="Icone de Retorno Financeiro"/>
        Negociação 100% online e segura
      </p>
      <div className="box-content">
        <div className="box">
          <img src={moneyIcon} alt="Icone de dinheiro na mão"/>
          <div className="text">
            <p className='low'>Parcelamento</p>
            <p>em até 60X</p>
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