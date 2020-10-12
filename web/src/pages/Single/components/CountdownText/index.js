import React from 'react';

import useCountdown from '../../../../hooks/useCountdown'

const CountdownText = () => {
  const {days, hours, minutes, seconds} = useCountdown();
  const Time = (time) => {
    if (time <= 0) return '00'
    if (time < 10) return `0${time}`;
    return time; 
  }
  return (
    <strong>
      {` ${Time(days)} dias e `}
      {`${Time(hours)}:${Time(minutes)}:${Time(seconds)}`}
    </strong>
  )
};

export default CountdownText;
