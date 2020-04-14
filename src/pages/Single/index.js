import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom'

import Header from './components/Header';
import Infos from './components/Infos';
import Galery from './components/Galery';
import Optionals from './components/Optionals';
import Footer from '../../components/Footer'
import "./styles.css";

const Single = ({data}) => {
  const { path } = useParams()
  const history = useHistory();
  const [details, setDetails] = useState();
  const [isMobile, setIfIsMobile] = useState();

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
    const values = data[path];
    if (values) {
      setDetails(values);
    } else {
      history.push('/');
    }
  }, [data, history, path])

  if (details) {
    return (
      <>
        <Header isMobile={isMobile} />
        <div id="car-details">
          <div className='container'>
            <main>
              <Infos isMobile={isMobile} data={details}/>
            </main>
            {!isMobile ? (
              <aside>
                <Galery data={details} />
              </aside>
            ) : null}
          </div>
        </div>
        <Optionals info={details}/>
        <Footer />
      </>
    );
  }
  return null
}

export default Single;
