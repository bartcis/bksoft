import React, { FunctionComponent, useContext } from 'react';
import { Link, RouteComponentProps } from '@reach/router';
import { Photo } from '@frontendmasters/pet';

import SearchParams from '../global/search';
import ContentLayout from '../global/ContentLayout';
import AppContext from '../global/AppContext';
import StyledSideMenu from '../global/SideMenu';

interface IProps {
  name: string;
  animal: string;
  breed: string;
  media: Array<Photo>;
  location: string;
  id: number;
}

const StartPage: FunctionComponent<RouteComponentProps> = () => {
  const [theme] = useContext(AppContext);

  const toRender = {
    title: 'Strona Główna',
    menu: [
      {
        label: 'Start',
        link: '/',
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

  return (
    <ContentLayout>
      <StyledSideMenu theme={theme.theme} data={toRender} />
      <div>
        <h1>ABC</h1>
        <h1>ABC</h1>
        <h1>ABC</h1>
        <SearchParams></SearchParams>
      </div>
    </ContentLayout>
  );
};

export default StartPage;
