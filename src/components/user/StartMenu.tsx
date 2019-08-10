import React from 'react';

import DefaultMenu from '../global/DefaultMenu';

interface IProps {
  path: string;
}

const StartMenu = (props: IProps) => {
  const menuContent = [
    {
      title: 'Start',
      slug: 'start',
      icon: '/images/icons/icon-home.svg',
      link: '/',
      alt: 'Strona Główna',
    },
    {
      title: 'O aplikacji',
      slug: 'about',
      icon: '/images/icons/icon-about.svg',
      link: '/about',
      alt: 'O aplikacji',
    },
    {
      title: 'Wesprzyj',
      slug: 'support',
      icon: '/images/icons/icon-support.svg',
      link: '/provide-support',
      alt: 'Wesprzyj projekt',
    },
    {
      title: 'Historia',
      slug: 'history',
      icon: '/images/icons/icon-history.svg',
      link: '/history',
      alt: 'Historia aplikacji',
    },
  ];

  return <DefaultMenu content={menuContent} type="start" title="Start" />;
};

export default StartMenu;
