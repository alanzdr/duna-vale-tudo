import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom'

import useData from '../../hooks/useData'

import Header from './components/Header';
import Car from './components/Car';
import SectionBreak from './components/SectionBreak';

import "./styles.css";

const Home = () => {

  const location = useLocation();
  const data = useData();

  useEffect(() => {
    if (location.state && location.state.id) {
      const { id } = location.state;
      const item = document.querySelector(`.car-${id}`)
      if (item) {
        item.scrollIntoView();
      }
    }
  }, [location.state])

  return (
    <div id='site-content'>
      <Header />
      <SectionBreak />
      <section id="cars-container" className='container'>
        <div className="list">
          {data.map(car => (
            <React.Fragment key={car.id}>
              <Car car={car} />
            </React.Fragment>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
