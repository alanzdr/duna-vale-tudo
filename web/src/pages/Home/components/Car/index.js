import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

// import { Container } from './styles';
import "./styles.css";

const Car = ({info}) => {

  const [error, setError] = useState(false);
  const [thumb, setThumb] = useState('');

  useEffect(() => {
    const loadImage = async () => {
      const downloadingImage = new Image();
      downloadingImage.src = info.data.pics[0];
      downloadingImage.onload = () => {
        setThumb(downloadingImage.src);
      };
      downloadingImage.onerror = () => {
        setError(true);
      }
    };
    loadImage();
  }, [info]);

  if (error) return null;
  
  return (
    <Link
      to={`/${info.key}`} 
      className={`item ${info.key}`}
    >
      <div className="car-box">
        <div className="image-container">
          <div className={`image ${thumb ? 'loaded' : ''}`}>
            <img src={thumb} alt={info.data.name}/>
          </div>
        </div>

        <div className="name">
          <h2>{info.name.main}</h2>
          <h3>{`${info.data.year} ${info.name.sub}`}</h3>
        </div>

        <div className="price">
          {info.data.price ? (
            <p className="from">
              de {info.data.price} por
            </p>
          ) : null}
          <p className="to">
            R$
            <strong> {info.promotion}</strong>
            ,00
          </p>
        </div>
        
        <div className="installment">
          <div className="line"></div>
          <p>1ªParcela para 90 dias</p>
          <div className="line"></div>
        </div>
        
        <div className="button">
          <p>Eu quero esta oferta!</p>
        </div>
      </div>
    </Link>
  );
}

export default Car;
