import React, { FunctionComponent, useContext, useEffect } from 'react';
import { useQuery } from 'graphql-hooks';

import DefaultMenu from '../global/DefaultMenu';
import singleTestShort from '../queries/singleTestShort';
import CurrentTestContext from '../context/CurrentTestContext';
import ThemeContext from '../context/ThemeContext';

const TestMenu = () => {
  const [test] = useContext(CurrentTestContext);
  const [theme, setTheme] = useContext(ThemeContext);
  const { loading, error, data } = useQuery(singleTestShort, {
    variables: {
      id: test,
    },
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  setTheme(data.singleTestShort.theme);

  const menuContent = [
    {
      title: 'Rozpocznij test',
      slug: 'test',
      icon: '/images/icons/icon-start-test.svg',
      link: `/test/${data.singleTestShort.id}`,
      alt: 'Rozpocznij test',
    },
    {
      title: 'Teoria do testu',
      slug: 'theory',
      icon: '/images/icons/icon-theory.svg',
      link: `/test/${data.singleTestShort.id}/theory`,
      alt: 'O teorii jakiejś tam',
    },
    {
      title: 'Wyniki w Polsce',
      slug: 'results',
      icon: '/images/icons/icon-results.svg',
      link: `/test/${data.singleTestShort.id}/results`,
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

  return (
    <DefaultMenu
      content={menuContent}
      type="test"
      title={data.singleTestShort.nameShort}
    />
  );
};

export default TestMenu;
