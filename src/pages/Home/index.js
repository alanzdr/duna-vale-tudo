import React from 'react';

// import { Container } from './styles';
import { Link } from 'react-router-dom'
import Header from './components/Header';
import CarItem from './components/CarItem';
import "./styles.css";

const Home = ({data}) => {
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
    </>
  );
}

export default Home;
