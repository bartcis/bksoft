import { createContext } from 'react';

const MenuTitleContext = createContext<[any, (context: string) => void]>([
  'Start',
  () => {},
]);

export default MenuTitleContext;
