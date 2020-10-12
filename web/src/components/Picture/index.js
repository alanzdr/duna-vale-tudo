import React from 'react'

const Picture = ({ source, src, ...rest }) => {
  if (source) {
    return (
      <picture>
        {source.map((item) => (
          <source
            key={item.src}
            media={item.media || ''}
            srcSet={item.src}
            type={item.type}
          />
        ))}
        <img src={src} loading="lazy" alt='Imagem sem titulo' {...rest} />
      </picture>
    )
  }
  return <img src={src} loading="lazy" alt='Imagem sem titulo' {...rest} />
}

export default Picture
