import React, { useRef, useState, useEffect } from 'react';
import TinySlider from "tiny-slider-react";
import "./styles.css";

// import { Container } from './styles';


const Galery = ({data}) => {
  const [thumbWidth, setThumbWidth] = useState(0)
  const [thumbLeft, setThumbLeft] = useState(0)
  const slideRef = useRef();

  useEffect(() => {
    const {length} = data.data.pics;
    if (length >= 4) {
      setThumbWidth(length * 25);
    } else {
      setThumbWidth(100)
    }
  }, [data]);

  const handleWithMove = (index) => {
    const { length } = data.data.pics;
    const maxPosition = length * 25 - 100; 
    let position = -50 + 25 * index;
    if (position < 0) {
      position = 0;
    } else if (position > maxPosition) {
      position = maxPosition;
    }
    setThumbLeft(position);
  }

  const Move = (index) => {
    if (slideRef.current) {
      slideRef.current.slider.goTo(index)
    }
  }

  const settings = {
    nav: false,
    controls: false,
    mouseDrag: true,
    speed: 1000,
  };

  return (
    <>
      <div id='galery-slider'>
        <TinySlider 
          ref={slideRef} 
          id='galery-slider' 
          settings={settings}
          onIndexChanged={(info) => handleWithMove(info.index)}
        >
          {data.data.pics.map(photo => (
            <div key={photo} className="photo-container">
              <div className="photo">
                <img src={photo} alt={data.data.name}/>
              </div>
            </div>
          ))}
        </TinySlider>
      </div>
      <div id="pictures-thumbs">
        <div 
          style={{
            width: `${thumbWidth}%`,
            left: `-${thumbLeft}%`
          }} 
          className="thumbs"
        >
          {data.data.pics.map((photo, i) => (
            <div onClick={() => Move(i)} key={photo} className="photo">
              <img src={photo} alt={data.data.name}/>
            </div>
          ))}
        </div>  
      </div>
    </>
  );
}

export default Galery;
