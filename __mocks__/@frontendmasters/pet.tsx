import { readFileSync } from 'fs';
import path from 'path';
import { act } from '@testing-library/react';

const breeds = [
  { name: 'Bichon Frise' },
  { name: 'Bolognese' },
  { name: 'Bolonka' },
  { name: 'Coton de Tulear' },
  { name: 'Havanese' },
  { name: 'Lowchen' },
  { name: 'Maltese' },
];

const doggos = JSON.parse(
  readFileSync(path.join(__dirname, '/res.json')).toString()
);

export const ANIMALS = [
  'barnyard',
  'horse',
  'rabbit',
  'scales',
  'small fury',
  'dog',
  'cat',
  'bird',
];
export const _breeds = breeds;
export const _dogs = doggos.animals;

const mock = {
  breeds: jest.fn(() => {
    return {
      then: (callback: any) =>
        act(() => {
          callback({
            breeds,
          });
        }),
    };
  }),
  animals: jest.fn(() => {
    return {
      then: (callback: any) =>
        act(() => {
          callback(doggos);
        }),
    };
  }),
};

export default mock;
