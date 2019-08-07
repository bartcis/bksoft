import React, {
  FunctionComponent,
  useContext,
  useEffect,
  Suspense,
  lazy,
} from 'react';
import { Link, RouteComponentProps, Router } from '@reach/router';
import { Photo } from '@frontendmasters/pet';

import ContentLayout from '../global/styled/ContentLayout';
import AppContext from '../AppContext';
import StyledSideMenu from './UserMenu';
import PageLayout from '../global/styled/PageLayout';
import Header from '../global/Header';
import Footer from '../global/Footer';
import TestList from './TestsList';
import About from './About';
import console = require('console');

// const About = lazy(() => import('./About'));

interface IProps {
  name: string;
  animal: string;
  breed: string;
  media: Array<Photo>;
  location: string;
  id: number;
}

const StartPage: FunctionComponent<RouteComponentProps> = () => {
  const [menuTitle, setTitle] = useContext(AppContext);

  console.log(menuTitle, setTitle);
  // useEffect(() => {
  //   setTitle({ menuTitle: 'Start' });
  // }, [setTitle]);

  return <h1>Wybierz test psychologiczny:</h1>;
};

export default StartPage;
