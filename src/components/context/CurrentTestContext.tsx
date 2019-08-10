import { createContext } from 'react';

const CurrentTestContext = createContext<[any, (context: string) => void]>([
  '',
  () => {},
]);

export default CurrentTestContext;
