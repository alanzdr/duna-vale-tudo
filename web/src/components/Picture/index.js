import React from 'react';

const handleWithFormats = (formats, media) => (
  <>
    {formats.svg ? (
      <source 
        srcSet={formats.svg}
        media={media ? media : null}
        type="image/svg+xml"
      />
    ) : null}
    {formats.webp ? (
      <source 
        srcSet={formats.webp} 
        media={media ? media : null}
        type="image/webp"
      />
    ) : null}
    {formats.png ? (
      <source 
        srcSet={formats.png} 
        media={media ? media : null}
        type="image/png"
      />
    ) : null}
    {formats.jpeg ? (
      <source 
        srcSet={formats.jpeg} 
        media={media ? media : null}
        type="image/jpeg"
      />
    ) : null}
  </>
)

const handleWithSources = (sources) => (
  <>
    {sources.map((val,i) => (
      <React.Fragment key={i.toString()}>
        {handleWithFormats(val.formats, val.media)}
      </React.Fragment>
    ))}
  </>
)

const Picture = ({
  formats,
  src,
  media,
  sources,
  alt
}) => (
  <picture>
    {media && media.max ? (
      Object.keys(media.max).map(val => (
        <source media={`(max-width: ${val}px)`} srcSet={media.max[val]} />
      ))
    ) : null}
    {media && media.min ? (
      Object.keys(media.min).map(val => (
        <source media={`(min-width: ${val}px)`} srcSet={media.min[val]} />
      ))
    ) : null}
    {sources ? handleWithSources(sources) : null}
    {formats ? handleWithFormats(formats) : null}
    <img src={src} alt={alt} />
  </picture>
);

export default Picture;
