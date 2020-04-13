import React from 'react';
import { useCountdown } from '../../utils/date';
import "./styles.css";

const Countdown = () => {
  const {days, hours, minutes, seconds} = useCountdown();
  const convertTime = (time) => {
    if (time < 10) return `0${time}`;
    return time; 
  }
  return (
    <div id='countdown-container'>
      <div className="item">
        <h2>{convertTime(days)}</h2>
        <p>dias</p>
      </div>
      <div className="item">
        <h2>{convertTime(hours)}</h2>
        <p>horas</p>
      </div>
      <div className="item">
        <h2>{convertTime(minutes)}</h2>
        <p>minutos</p>
      </div>
      <div className="item">
        <h2>{convertTime(seconds)}</h2>
        <p>segundos</p>
      </div>
    </div>
  )
};

export default Countdown;
