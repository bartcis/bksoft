import { createContext } from 'react';

const ThemeContext = createContext<[any, (context: string) => void]>([
  'base',
  () => {},
]);

export default ThemeContext;
