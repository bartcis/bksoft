import React, { useContext, useState } from 'react';
import styled from 'styled-components';

import { useQuery } from 'graphql-hooks';
import singleTestShort from '../queries/singleTestShort';

import CurrentTestContext from '../context/CurrentTestContext';
import ThemeContext from '../context/ThemeContext';
import console = require('console');
import MenuTitleContext from '../context/MenuTitleContext';

import Loader from '../global/Loader';
import Logo from '../global/icons/Logo';
import StartTestIcon from '../global/icons/StartTestIcon';
import TheoryIcon from '../global/icons/TheoryIcon';
import ResultsIcon from '../global/icons/ResultsIcon';
import ReturnIcon from '../global/icons/ReturnIcon';

let currentTheme: string;

const TestMenu = () => {
  const currentDomain = window.location.pathname.split('/')[2];
  const [test] = useContext(CurrentTestContext);
  const [theme, setTheme] = useContext(ThemeContext);
  const [menuTitle, setTitle] = useContext(MenuTitleContext);

  const [active, setActive] = useState('test');
  const { loading, error, data } = useQuery(singleTestShort, {
    variables: {
      id: test || currentDomain,
    },
  });

  if (loading) return <Loader />;
  if (error) return `Error! ${error}`;

  setTheme(data.singleTestShort.theme);
  setTitle(data.singleTestShort.nameShort);
  currentTheme = theme;

  const menuContent = [
    {
      slug: 'test',
      link: `/test/${data.singleTestShort.id}`,
    },
    {
      slug: 'theory',
      link: `/test/${data.singleTestShort.id}/theory`,
    },
    {
      slug: 'results',
      link: `/test/${data.singleTestShort.id}/results`,
    },
    {
      slug: 'return',
      link: '/',
    },
  ];

  return (
    <Menu>
      <Logo />
      <ul>
        <li onClick={() => setActive(menuContent[0].slug)}>
          <StartTestIcon
            status={active === menuContent[0].slug ? 'active' : 'unactive'}
            link={menuContent[0].link}
          />
        </li>

        <li onClick={() => setActive(menuContent[1].slug)}>
          <TheoryIcon
            status={active === menuContent[1].slug ? 'active' : 'unactive'}
            link={menuContent[1].link}
          />
        </li>
        <li onClick={() => setActive(menuContent[2].slug)}>
          <ResultsIcon
            status={active === menuContent[2].slug ? 'active' : 'unactive'}
            link={menuContent[2].link}
          />
        </li>
        <li>
          <ReturnIcon
            status={active === menuContent[3].slug ? 'active' : 'unactive'}
            link={menuContent[3].link}
          />
        </li>
      </ul>
    </Menu>
  );
};

export default TestMenu;

const Menu = styled.aside`
  width: 50px;
  text-align: center;
  height: 98%;
  padding: 0.5rem;
  box-shadow: ${({ theme }) => theme.styledColors[currentTheme].shadow} 0px 3px
    3px 3px;
  background-color: ${({ theme }) =>
      theme.styledColors[currentTheme].backgroundSide}
    0px 5px 5px 5px;

  ul {
    padding: 0;
    list-style: none;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    li {
      padding: 0.5rem 0;
    }
  }
`;
