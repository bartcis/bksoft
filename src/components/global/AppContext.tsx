import { createContext } from 'react';

interface IProps {
  theme: string;
}

const AppContext = createContext<[any, (theme: IProps) => void]>([
  {
    theme: 'base'
  },
  () => {},
]);

export default AppContext;
