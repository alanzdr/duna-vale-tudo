import React, {
  createContext,  
  useEffect,
  useContext,
  useCallback,
} from 'react';
import { useHistory } from 'react-router-dom';
import Analytics from 'react-ga';

const TRACKING_ID = 'UA-127174063-2';

export const AnalyticsContext = createContext({});

const Provider = ({ children }) => {
  const history = useHistory()

  const pageview = useCallback(() => {
    Analytics.pageview(window.location.pathname);
  }, [])

  const initialize = useCallback(() => {
    Analytics.initialize(TRACKING_ID);
  }, [])

  const sendEvent = useCallback((props) => {
    Analytics.event(props);
  }, [])

  const sendWhastEvent = useCallback((label) => {
    sendEvent({
      category: 'feirao-seminovos-duna',
      action: `click`,
      label,
    });
  }, [sendEvent])

  const value = {
    setPageview: pageview,
    initialize,
    event: {
      send: sendEvent,
      whatsapp: sendWhastEvent,
    },
  };

  useEffect(() => {
    initialize()
    pageview()
  }, [initialize, pageview])

  useEffect(() => {
    const unregisterListen = history.listen(() => {
      pageview();
    })
    return () => {
      unregisterListen();
    }
  }, [history, pageview])

  return (
    <AnalyticsContext.Provider
      value={value}
    >
      {children}
    </AnalyticsContext.Provider>
  );
}

export const useAnalytics = () => {
  const values = useContext(AnalyticsContext);
  return values;
}

export default Provider;