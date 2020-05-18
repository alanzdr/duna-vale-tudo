import { useMemo, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Analytics from 'react-ga';

const TRACKING_ID = 'UA-127174063-2';

export const useAnalytics = () => {
  const analytics = useMemo(() => {
    const initialize = () => {
      Analytics.initialize(TRACKING_ID);
    };

    const pageview = () => {
      Analytics.pageview(window.location.pathname);
    };

    const sendEvent = (props) => {
      Analytics.event(props);
    };

    const sendWhastEvent = (label) => {
      sendEvent({
        category: 'feirao-vale-tudo',
        action: `click`,
        label,
      });
    };

    return {
      setPageview: pageview,
      initialize,
      event: {
        send: sendEvent,
        whatsapp: sendWhastEvent,
      },
    };
  }, []);

  return analytics;
};

const AnalyticsContainer = ({children}) => {
  const analytics = useAnalytics()
  const history = useHistory()

  useEffect(() => {
    analytics.initialize()
  }, [analytics])

  useEffect(() => {
    const unregisterListen = history.listen(() => {
      analytics.setPageview();
    })
    return () => {
      unregisterListen();
    }
  }, [analytics, history])

  return children;
}

export default AnalyticsContainer;