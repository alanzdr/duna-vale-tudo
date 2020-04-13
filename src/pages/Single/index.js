import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom'

import Header from './components/Header';
import Infos from './components/Infos';
import Galery from './components/Galery';
import "./styles.css";

const Single = ({data}) => {
  const { path } = useParams()
  const history = useHistory();
  const [details, setDetails] = useState();
  const [isMobile, setIfIsMobile] = useState();

  useEffect(() => {
    setIfIsMobile(window.innerWidth <= 1000);
    const handleResize = () => {
      console.log(window.innerWidth)
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
          <main>
            <Infos isMobile={isMobile} data={data}/>
          </main>
          {!isMobile ? (
            <aside>
              <Galery data={data} />
            </aside>
          ) : null}
        </div>
      </>
    );
  }
  return null
}

export default Single;
