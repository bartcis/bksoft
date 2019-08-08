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

const About: FunctionComponent<RouteComponentProps> = () => {
  const [title, setTitle] = useContext(MenuTitleContext);

  useEffect(() => {
    setTitle('O Aplikacji');
  }, [setTitle]);

  return <h1>About Page</h1>;
};

export default About;
