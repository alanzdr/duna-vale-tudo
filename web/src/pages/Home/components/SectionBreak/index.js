import React from 'react';

import timeIcon from '../../../../assets/icons/timer90.svg'
import taxIcon from '../../../../assets/icons/tax.svg'

import './styles.css';

function SectionBreak() {
  return (
    <section id="section-break">
      <div className="time">
        <img src={timeIcon} alt="Icone de periodo de 90 dias"/>
        <p>primeira parcela para 90 dias!</p>
      </div>
      <div className="tax">
        <img src={taxIcon} alt="Ícone de Dinheiro sibolisando taxa"/>
        <div className="text">
          <h4>taxa de 0,55%</h4>
          <p>em veículos de 2017, 2018, 2019 e 2020</p>
        </div>
      </div>
    </section>
  )
}

export default SectionBreak;