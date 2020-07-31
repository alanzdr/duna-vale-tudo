import React from 'react';
import './assets/fonts/bebasneue-bold.ttf'
import './global.css';
import Routes from './routes';
import DataProvider from './contexts/data'

const App = () => {
  return (
    <DataProvider>
      <Routes />
    </DataProvider>
  );
}

export default App;
