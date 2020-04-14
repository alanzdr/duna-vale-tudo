import React from 'react';
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

import Header from './components/Header';
import CarItem from './components/CarItem';
import Footer from '../../components/Footer';
import "./styles.css";

const Home = ({data}) => {
  const history = useHistory();
  history.listen(() => {
    window.scrollTo(0, 0);
  })
  const dataList = Object.keys(data).map(key => ({...data[key], key}))
  return (
    <>
      <Header />
      <div id="cars-container">
        <div className="list">
          {dataList.map(car => (
            <Link to={`/${car.key}`} key={car.key} className="item">
              <CarItem info={car} />
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
