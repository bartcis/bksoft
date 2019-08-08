import React, {
  FunctionComponent,
  useContext,
  useEffect,
  Suspense,
} from 'react';
import { Link, RouteComponentProps, Router } from '@reach/router';
import SearchParams from '../global/search';

import MenuTitleContext from '../context/MenuTitleContext';

interface IProps {
  name: string;
  animal: string;
  breed: string;
  location: string;
  id: number;
}

const AppLog: FunctionComponent<RouteComponentProps> = () => {
  const [title, setTitle] = useContext(MenuTitleContext);

  useEffect(() => {
    setTitle('Historia');
  }, [setTitle]);

  return (
    <div>
      <h1>ABC</h1>
      <h1>ABC</h1>
      <h1>ABC</h1>
      <SearchParams></SearchParams>
    </div>
  );
};

export default AppLog;
