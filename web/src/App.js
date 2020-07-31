import React from 'react';
import './assets/fonts/bebasneue-bold.ttf'
import './global.css';
import Routes from './routes';
import data from './data/data.json';

const App = () => {
  return (
    <Routes data={data} />
  );
}

export default App;
