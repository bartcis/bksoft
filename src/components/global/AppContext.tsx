import { createContext } from 'react';

interface IProps {
  theme: string;
  test: string;
}

const AppContext = createContext<[any, (theme: IProps) => void]>([
  {
    theme: 'base',
    test: 'test',
  },
  () => {},
]);

export default AppContext;
