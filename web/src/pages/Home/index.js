import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom'

import Header from './components/Header';
import Car from './components/Car';
import SectionBreak from './components/SectionBreak';
import Footer from '../../components/Footer';

import "./styles.css";

const Home = ({data}) => {

  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.path) {
      const { path } = location.state;
      const item = document.querySelector(`.${path}`)
      if (item) {
        item.scrollIntoView();
      }
    }
  }, [location.state])

  const dataList = Object.keys(data).map(key => ({...data[key], key}))
  return (
    <div id='site-content'>
      <Header />
      <SectionBreak />
      <section id="cars-container">
        <div className="list">
          {dataList.map(car => (
            <React.Fragment key={car.key}>
              <Car info={car} />
            </React.Fragment>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;