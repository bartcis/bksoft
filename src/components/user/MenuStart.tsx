import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';

import ThemeContext from '../context/ThemeContext';
import MenuTitleContext from '../context/MenuTitleContext';

import Logo from '../global/icons/Logo';
import StartIcon from '../global/icons/StartIcon';
import AboutIcon from '../global/icons/AboutIcon';
import AuthorsIcon from '../global/icons/AuthorsIcon';
import SupportIcon from '../global/icons/SupportIcon';

let currentTheme: string;

interface IProps {
  path: string;
}

const StartMenu = ({ path }: IProps) => {
  const [theme] = useContext(ThemeContext);
  const [menuTitle, setTitle] = useContext(MenuTitleContext);
  const [active, setActive] = useState('start');

  const menuContent = [
    {
      title: 'Start',
      slug: 'start',
      link: '/',
      component: 'StartIcon',
    },
    {
      title: 'O Aplikacji',
      slug: 'about',
      link: '/about',
    },
    {
      title: 'Wesprzyj',
      slug: 'support',
      link: '/provide-support',
    },
    {
      title: 'Autorzy',
      slug: 'authors',
      link: '/authors',
    },
  ];

  currentTheme = theme;

  useEffect(() => {
    const active = sessionStorage.getItem('active');
    if (
      active &&
      (active === 'start' ||
        active === 'about' ||
        active === 'support' ||
        active === 'authors')
    ) {
      setActive(active);
    }
  }, [setActive]);

  const updateStates = (title: string, type: string) => {
    setTitle(title);
    setActive(type);
    sessionStorage.setItem('active', type);
  };

  return (
    <Menu>
      <Nav>
        <Logo />
        <ul>
          <li
            onClick={() =>
              updateStates(menuContent[0].title, menuContent[0].slug)
            }
          >
            <StartIcon
              status={active === menuContent[0].slug ? 'active' : 'unactive'}
              link={menuContent[0].link}
            />
          </li>

          <li
            onClick={() =>
              updateStates(menuContent[1].title, menuContent[1].slug)
            }
          >
            <AboutIcon
              status={active === menuContent[1].slug ? 'active' : 'unactive'}
              link={menuContent[1].link}
            />
          </li>
          <li
            onClick={() =>
              updateStates(menuContent[2].title, menuContent[2].slug)
            }
          >
            <SupportIcon
              status={active === menuContent[2].slug ? 'active' : 'unactive'}
              link={menuContent[2].link}
            />
          </li>
          <li
            onClick={() =>
              updateStates(menuContent[3].title, menuContent[3].slug)
            }
          >
            <AuthorsIcon
              status={active === menuContent[3].slug ? 'active' : 'unactive'}
              link={menuContent[3].link}
            />
          </li>
        </ul>
      </Nav>
    </Menu>
  );
};

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

export default StartMenu;
