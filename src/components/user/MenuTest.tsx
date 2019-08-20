import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';

import { useManualQuery } from 'graphql-hooks';
import singleTestShort from '../queries/singleTestShort';

import CurrentTestContext from '../context/CurrentTestContext';
import ThemeContext from '../context/ThemeContext';
import MenuTitleContext from '../context/MenuTitleContext';

import Logo from '../global/icons/Logo';
import StartTestIcon from '../global/icons/StartTestIcon';
import TheoryIcon from '../global/icons/TheoryIcon';
import ResultsIcon from '../global/icons/ResultsIcon';
import ReturnIcon from '../global/icons/ReturnIcon';

let currentTheme: string;

const TestMenu = () => {
  const currentUrl = window.location.pathname.split('/')[2];
  const [test, setTest] = useContext(CurrentTestContext);
  const [theme, setTheme] = useContext(ThemeContext);
  const [menuTitle, setTitle] = useContext(MenuTitleContext);
  const [fetchTest] = useManualQuery(singleTestShort);
  const [active, setActive] = useState('test');

  const backupFetch = async () => {
    const testData = await fetchTest({
      variables: { id: currentUrl },
    });

    const r = testData.data.singleTestShort;
    setTest({ id: r.id, name: r.nameFull, theme: r.theme });
    setTheme(r.theme);
    setTitle(r.nameFull);
  };

  useEffect(() => {
    const active = sessionStorage.getItem('active');
    if (
      active &&
      (active === 'test' || active === 'theory' || active === 'results')
    ) {
      setActive(active);
    }

    if (test) {
      setTheme(test.theme);
      setTitle(test.name);
    } else {
      backupFetch();
    }
  }, [setTitle, setTheme, setTest, setActive]);

  currentTheme = theme;

  const menuContent = [
    {
      slug: 'test',
      link: `/test/${test.id}`,
    },
    {
      slug: 'theory',
      link: `/test/${test.id}/theory`,
    },
    {
      slug: 'results',
      link: `/test/${test.id}/results`,
    },
    {
      slug: 'return',
      link: '/',
    },
  ];

  const updateActive = (active: string) => {
    setActive(active);
    sessionStorage.setItem('active', active);
  };

  return (
    <Menu>
      <Nav>
        <Logo />
        <ul>
          <li onClick={() => updateActive(menuContent[0].slug)}>
            <StartTestIcon
              status={active === menuContent[0].slug ? 'active' : 'unactive'}
              link={menuContent[0].link}
            />
          </li>

          <li onClick={() => updateActive(menuContent[1].slug)}>
            <TheoryIcon
              status={active === menuContent[1].slug ? 'active' : 'unactive'}
              link={menuContent[1].link}
            />
          </li>
          <li onClick={() => updateActive(menuContent[2].slug)}>
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
