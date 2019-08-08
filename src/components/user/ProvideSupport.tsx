import React, {
  FunctionComponent,
  useContext,
  useEffect,
  Suspense,
} from 'react';
import { Link, RouteComponentProps, Router } from '@reach/router';

import MenuTitleContext from '../context/MenuTitleContext';

interface IProps {
  name: string;
  animal: string;
  breed: string;
  location: string;
  id: number;
}

const ProvideSupport: FunctionComponent<RouteComponentProps> = () => {
  const [title, setTitle] = useContext(MenuTitleContext);

  useEffect(() => {
    setTitle('Wesprzyj');
  }, [setTitle]);

  return <h1>Support</h1>;
};

export default ProvideSupport;
