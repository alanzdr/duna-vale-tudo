import React from 'react';
import './assets/fonts/bebasneue-bold.ttf'
import './global.css';
import Routes from './routes';
import Localization from './components/Localization';
import LocalizationProvider from './contexts/localization'
import DataProvider from './contexts/data'

const App = () => {
  return (
    <LocalizationProvider>
      <DataProvider>
        <Routes />
      </DataProvider>
      <Localization />
    </LocalizationProvider>
  );
}

export default App;
