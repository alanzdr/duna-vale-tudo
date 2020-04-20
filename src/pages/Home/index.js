import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import Header from './components/Header';
import CarItem from './components/CarItem';
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
      <div id="cars-container">
        <div className="list">
          {dataList.map(car => (
            <Link
              to={`/${car.key}`} 
              key={car.key} 
              className={`item ${car.key}`}
            >
              <CarItem info={car} />
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
