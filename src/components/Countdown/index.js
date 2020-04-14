import React from 'react';
import { useCountdown } from '../../utils/date';
import CountdownNumber from '../CountdownNumber';
import "./styles.css";

const Countdown = () => {
  const {days, hours, minutes, seconds} = useCountdown();
  const convertTime = (time) => {
    if (time < 10) return [0, time];
    return time.toString().split(''); 
  }
  return (
    <div id='countdown-container'>
      <CountdownNumber numArray={convertTime(days)} text="dias"/>
      <CountdownNumber numArray={convertTime(hours)} text="horas"/>
      <CountdownNumber numArray={convertTime(minutes)} text="minutos"/>
      <CountdownNumber numArray={convertTime(seconds)} text="segundos"/>
    </div>
  )
};

export default Countdown;
