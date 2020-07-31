import React from 'react';
import { useCountdown } from '../../../../utils/date';
import "./styles.css";

const Countdown = () => {
  const {days, hours, minutes, seconds} = useCountdown();
  
  const convertTime = (time) => {
    if (time < 0) return '00';
    if (time < 10) return `0${time}`;
    return time; 
  }

  return (
    <div id='countdown-itens'>
      <div className="item">
        <h3>{convertTime(days)}</h3>
        <p>dias</p>
      </div>
      <div className="item">
        <h3>{convertTime(hours)}</h3>
        <p>horas</p>
      </div>
      <div className="item">
        <h3>{convertTime(minutes)}</h3>
        <p>minutos</p>
      </div>
      <div className="item">
        <h3>{convertTime(seconds)}</h3>
        <p>segundos</p>
      </div>
    </div>
  )
};

export default Countdown;
