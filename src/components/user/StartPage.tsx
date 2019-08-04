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
import AppContext from '../global/AppContext';
import StyledSideMenu from '../global/SideMenu';
import PageLayout from '../global/styled/PageLayout';
import Header from '../global/Header';
import Footer from '../global/Footer';
import TestList from './TestsList';
import About from './About';

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
  const [theme, setTheme] = useContext(AppContext);

  const toRender = {
    title: 'Strona Główna',
    menu: [
      {
        label: 'Start',
        link: '/start',
      },
      {
        label: 'O aplikacji',
        link: '/about',
      },
      {
        label: 'Wesprzyj',
        link: '/give-support',
      },
      {
        label: 'App Log',
        link: '/versions',
      },
    ],
  };

  useEffect(() => {
    setTheme({ theme: 'base' });
  }, [setTheme]);

  return <h1>Wybierz test psychologiczny:</h1>;
};

export default StartPage;
