import { createContext } from 'react';

const CurrentTestContext = createContext<[any, (context: object) => void]>([
  '',
  () => {},
]);

export default CurrentTestContext;
