import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom'

import useData from '../../hooks/useData'

import Header from './components/Header';
import Infos from './components/Infos';
import Galery from './components/Galery';
import Optionals from './components/Optionals';
import "./styles.css";

const Single = () => {
  const { id } = useParams()
  const history = useHistory();
  const data = useData();

  const [car, setCar] = useState();
  const [isMobile, setIfIsMobile] = useState();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  useEffect(() => {
    setIfIsMobile(window.innerWidth <= 1000);
    const handleResize = () => {
      setIfIsMobile(window.innerWidth <= 1000);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  
  useEffect(() => {
    if (data.length > 0) {
      const findCar = data.find(val => val.id === id)
      if (findCar) {
        setCar(findCar);
      } else {
        history.push('/');
      }
    }
  }, [data, history, id])

  if (car) {
    return (
      <>
        <Header />
        <div id="car-details">
          <div className='container'>
            <main>
              <Infos 
                id={id}
                isMobile={isMobile} 
                car={car}
              />
            </main>
            {!isMobile ? (
              <aside>
                <Galery data={car} />
              </aside>
            ) : null}
          </div>
        </div>
        <Optionals info={car}/>
      </>
    );
  }
  return null
}

export default Single;
