import React, { useState } from 'react';

import useDropdown from './useDropdown';

const SearchParams = () => {
  const animals = ['dog', 'cat', 'lama', 'dragon'];

  const [location, setLocation] = useState("Seattle, WA");
  // const [animal, setAnimal] = useState('dog');
  // const [breed, setBreed] = useState('');
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown('Animal', 'dog', animals);
  const [breed, BreedDropdown] = useDropdown('Breed', '', breeds);

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input id='location' value={location} placeholder="Location"
            onChange={e => setLocation(e.target.value)}/>
        </label>
        {/* <label htmlFor="animal">
          Animal
          <select name="animal" id="animal" value={animal}
            onChange={e => setAnimal(e.target.value)}
            onBlur={e => setAnimal(e.target.value)}>
            <option>All</option>
            {animals.map(animal => (
              <option key={animal} value={animal}>{animal}</option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select name="breed" id="breed" value={breed}
            onChange={e => setBreed(e.target.value)}
            onBlur={e => setBreed(e.target.value)}
            disabled={breeds.length === 0}
            >
            <option>All</option>
            {breeds.map(breed => (
              <option key={breed} value={breed}>{breed}</option>
            ))}
          </select>
        </label> */}
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default SearchParams;
