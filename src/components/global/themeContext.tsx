import { createContext } from 'react';
import { string } from 'prop-types';

interface IProps {
  buttonColor: string;
}

const ThemeContext = createContext<[any, (theme: IProps) => void]>([
  { buttonColor: 'green' },
  () => {},
]);

export default ThemeContext;
