import React from 'react';
import { Link } from '@reach/router';

export default function Pet({ name, animal, breed, media, location, id }) {
  let hero = 'http://placecorgi.com/300/300';

  if (media.length) {
    hero = media[0].small;
  }

  return (
    <Link to={`details/${id}`} className='pet'>
      <div className="image-cont">
        <img src={hero} alt={name}/>
      </div>
      <div className="info-cont">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} -  ${animal}`}</h2>
      </div>
    </Link>
  );
}
