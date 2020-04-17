import React from 'react';

const Picture = ({
  formats,
  src,
  alt
}) => (
  <picture>
    {formats.svg ? (
      <source srcSet={formats.svg} type="image/svg+xml"/>
    ) : null}
    {formats.webp ? (
      <source srcSet={formats.webp} type="image/webp"/>
    ) : null}
    {formats.png ? (
      <source srcSet={formats.png} type="image/png"/>
    ) : null}
    {formats.jpeg ? (
      <source srcSet={formats.jpeg} type="image/jpeg"/>
    ) : null}
    <img src={src} alt={alt} />
  </picture>
);

export default Picture;
