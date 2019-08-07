import { createContext } from 'react';

interface IProps {
  theme: string;
  test: string;
  menuTitle: string;
}

const AppContext = createContext<[any, (context: IProps) => void]>([
  {
    theme: 'base',
    test: 'test',
    menuTitle: 'Start',
  },
  () => {},
]);

export default AppContext;
