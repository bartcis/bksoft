import React from 'react';

import DefaultMenu from '../global/DefaultMenu';
import { getArgumentValues } from 'graphql/execution/values';

interface IProps {
  path: string;
}

const TestMenu = (props: IProps) => {
  const dataAPI = {
    name: 'Poziomy Gravesa',
    id: 'graves',
  };
  const menuContent = [
    {
      title: 'Rozpocznij test',
      slug: 'test',
      icon: '/images/icons/icon-start-test.svg',
      link: `/test/${dataAPI.id}`,
      alt: 'Rozpocznij test',
    },
    {
      title: 'Teoria do testu',
      slug: 'theory',
      icon: '/images/icons/icon-theory.svg',
      link: `/test/${dataAPI.id}/theory`,
      alt: 'O teorii jakiejś tam',
    },
    {
      title: 'Wyniki w Polsce',
      slug: 'results',
      icon: '/images/icons/icon-results.svg',
      link: `/test/${dataAPI.id}/results`,
      alt: 'Wyniki testu jakiegos tam w Polsce',
    },
    {
      title: 'Powrót',
      slug: 'return',
      icon: '/images/icons/icon-back.svg',
      link: '/',
      alt: 'Wróc do Strony Głównej',
    },
  ];

  return <DefaultMenu content={menuContent} type="test" title={dataAPI.name} />;
};

export default TestMenu;
