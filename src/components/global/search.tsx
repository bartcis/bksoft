import React, {
  useState,
  useEffect,
  useContext,
  FunctionComponent,
} from 'react';
import pet, { ANIMALS, Animal } from '@frontendmasters/pet';
import AppContext from './AppContext';
import { RouteComponentProps } from '@reach/router';

import useDropdown from './useDropdown';
import Results from './results';
import { Theme } from './designSystem/themeExport';

const SearchParams: FunctionComponent<RouteComponentProps> = () => {
  const [location, setLocation] = useState('Seattle, WA');
  // const [animal, setAnimal] = useState('dog');
  // const [breed, setBreed] = useState('');
  const [breeds, setBreeds] = useState([] as string[]);
  const [animal, AnimalDropdown] = useDropdown('Animal', 'dog', ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown('Breed', '', breeds);
  const [pets, setPets] = useState([] as Animal[]);
  const [theme, setTheme] = useContext(AppContext);

  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal,
    });

    setPets(animals || []);
  }

  useEffect(() => {
    setBreeds([]);
    setBreed('');

    pet.breeds(animal).then(({ breeds }) => {
      const breedStrings = breeds.map(({ name }) => name);
      setBreeds(breedStrings);
    }, console.error);
  }, [animal, setBreeds, setBreed]);

  return (
    <div className="search-params">
      <form
        onSubmit={e => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={e => setLocation(e.target.value)}
          />
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
        <label htmlFor="theme">
          Theme
          <select
            onChange={e => setTheme({ theme: e.target.value })}
            onBlur={e => setTheme({ theme: e.target.value })}
          >
            <option value="base">Base</option>
            <option value="graves">Graves</option>
          </select>
        </label>
        <button style={{ backgroundColor: theme.theme.buttonColor }}>
          Submit
        </button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
