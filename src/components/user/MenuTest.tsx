import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';

import { useQuery } from 'graphql-hooks';
import singleTestShort from '../queries/singleTestShort';

import CurrentTestContext from '../context/CurrentTestContext';
import ThemeContext from '../context/ThemeContext';
import MenuTitleContext from '../context/MenuTitleContext';

import Loader from '../global/Loader';
import Logo from '../global/icons/Logo';
import StartTestIcon from '../global/icons/StartTestIcon';
import TheoryIcon from '../global/icons/TheoryIcon';
import ResultsIcon from '../global/icons/ResultsIcon';
import ReturnIcon from '../global/icons/ReturnIcon';
import console = require('console');

let currentTheme: string;

const TestMenu = () => {
  const currentDomain = window.location.pathname.split('/')[2];
  const [{ id }, setTest] = useContext(CurrentTestContext);
  const [theme, setTheme] = useContext(ThemeContext);
  const [menuTitle, setTitle] = useContext(MenuTitleContext);

  const [active, setActive] = useState('test');
  const { loading, error, data } = useQuery(singleTestShort, {
    variables: {
      id: id || currentDomain,
    },
  });

  console.log(data);
  if (loading) return <Loader />;
  if (error) return `Error! ${error}`;

  useEffect(() => {
    setTheme(data.singleTestShort.theme);
    setTitle(data.singleTestShort.nameFull);
    setTest({
      id: data.singleTestShort.id,
      name: data.singleTestShort.nameFull,
    });
  }, [setTitle, setTheme, setTest]);

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
      <Nav>
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
      </Nav>
    </Menu>
  );
};

export default TestMenu;

const Nav = styled.nav`
  position: fixed;
  box-shadow: ${({ theme }) => theme.styledColors[currentTheme].shadow} 0px 3px
    3px 3px;
  background-color: ${({ theme }) =>
    theme.styledColors[currentTheme].backgroundSide};
  width: 50px;
  padding: 0.5rem;
  left: 0;
  top: 0;
  height: 100%;
`;

const Menu = styled.aside`
  width: 50px;
  text-align: center;
  height: 98%;
  padding: 0.5rem;

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
