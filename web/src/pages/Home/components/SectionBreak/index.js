import React from 'react';

import timeIcon from '../../../../assets/icons/timer90.svg'
import moneyBackIcon from '../../../../assets/icons/money-back.svg'

import './styles.css';

function SectionBreak() {
  return (
    <section id="section-break" className='container'>
      <p className="text-left">
        As <strong> melhores ofertas e condições</strong> exclusivas para você 
        comprar seu seminovo com garantia e procedência.
      </p>
      <div className="box-content">
        <div className="box">
          <img src={timeIcon} alt="Icone de periodo de 90 dias"/>
          <div className="text">
            <p className='low'>primeira parcela</p>
            <p>para 90 dias!</p>
          </div>
        </div>
        <div className="box">
          <img src={moneyBackIcon} alt="Icone de Retorno Financeiro"/>
          <div className="text">
            <p>troco na troca</p>
          </div>
        </div>
      </div>

    </section>
  )
}

export default SectionBreak;