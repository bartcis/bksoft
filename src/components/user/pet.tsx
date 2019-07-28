import React from 'react';
import { Link } from '@reach/router';
import { Photo } from '@frontendmasters/pet';

interface IProps {
  name: string;
  animal: string;
  breed: string;
  media: Array<Photo>;
  location: string;
  id: number;
}

export default function Pet({
  name,
  animal,
  breed,
  media,
  location,
  id,
}: IProps) {
  let hero = 'http://placecorgi.com/300/300';

  if (media.length) {
    hero = media[0].small;
  }

  return (
    <Link to={`details/${id}`} className="pet">
      <div className="image-cont">
        <img src={hero} alt={name} />
      </div>
      <div className="info-cont">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} -  ${animal}`}</h2>
      </div>
    </Link>
  );
}
