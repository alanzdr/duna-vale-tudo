import { useEffect, useState } from 'react';
import * as moment from 'moment';
import 'moment/locale/pt-br';

export const useCountdown = () => {
  // const now = Date.now();
  const [now, setNow] = useState(moment())
  const [difference, setDifference] = useState();
  const eventTime = 1590973200000;

  useEffect(() => {
    // const Interval = 
    const interval = setInterval(() => {
      setNow(moment())
    }, 1000)
    return () => {
      clearInterval(interval);
    }
  }, [])

  useEffect(() => {
    // const d = endDate.di
    const diffTime = eventTime - now.toDate().getTime();
    const duration = moment.duration(diffTime, 'milliseconds');
    setDifference(moment.duration(duration, 'milliseconds'));
    return () => {
      setDifference(undefined);
    }
  }, [now])

  if (!difference) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }
  
  return {
    days: difference.days(),
    hours: difference.hours(),
    minutes: difference.minutes(),
    seconds: difference.seconds()
  }
}