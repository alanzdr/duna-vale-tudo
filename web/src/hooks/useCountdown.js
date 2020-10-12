import { useEffect, useState, useMemo } from 'react';
import * as moment from 'moment';
import 'moment/locale/pt-br';

const EVENT_DATE = '10 31 2020 23:59:59 GMT-0300';

const useCountdown = () => {
  // const now = Date.now();
  const [now, setNow] = useState(moment())
  const [difference, setDifference] = useState();
  const eventTime = useMemo(() => (new Date(EVENT_DATE)).getTime(), []);

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(moment())
    }, 1000)
    return () => {
      clearInterval(interval);
    }
  }, [])

  useEffect(() => {
    const diffTime = eventTime - now.toDate().getTime();
    const duration = moment.duration(diffTime, 'milliseconds');
    setDifference(moment.duration(duration, 'milliseconds'));
    return () => {
      setDifference(undefined);
    }
  }, [eventTime, now])

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

export default useCountdown;