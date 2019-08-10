import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';

import ThemeContext from '../context/ThemeContext';
import MenuTitleContext from '../context/MenuTitleContext';

import MenuLink from './MenuLink';

let currentTheme: string;

interface IProps {
  content: {
    title: string;
    slug: string;
    icon: string;
    link: string;
    alt: string;
  }[];
  type: string;
  title: string;
}

const DefaultMenu = ({ content, type, title }: IProps) => {
  const [theme] = useContext(ThemeContext);
  const [menuTitle, setTitle] = useContext(MenuTitleContext);
  const [active, setActive] = useState('start');

  currentTheme = theme;

  useEffect(() => {
    setTitle(title);
    setActive(type);
  }, [setActive, setTitle]);

  return (
    <Menu>
      <Content>
        <h2>{menuTitle}</h2>
        <ul>
          {content.map(element => (
            <li onClick={() => setActive(element.slug)} key={element.slug}>
              <MenuLink
                status={active === element.slug ? 'active' : ''}
                link={element.link}
                icon={element.icon}
                alt={`MyPer - testy psychologiczne - ${element.alt}.`}
                title={element.title}
              />
            </li>
          ))}
        </ul>
      </Content>
    </Menu>
  );
};

export default DefaultMenu;

const Content = styled.div`
  position: fixed;
  width: 207px;
  max-width: 207px;
  height: 100%;
  padding: 1rem;
  background-color: ${({ theme }) =>
    theme.styledColors[currentTheme].backgroundTwo};
  border-right: 1px solid
    ${({ theme }) => theme.styledColors[currentTheme].border};
  box-shadow: ${({ theme }) => theme.styledColors[currentTheme].shadow} 0px 5px
    5px 5px;
`;

const Menu = styled.aside`
  width: 240px;
  h2 {
    margin: 0;
    color: ${({ theme }) => theme.styledColors[currentTheme].link};
    height: 3rem;
    border-bottom: 1px solid
      ${({ theme }) => theme.styledColors[currentTheme].borderTwo};
  }
  ul {
    padding: 0;
    list-style: none;
    li {
      padding: 0.5rem 0;
    }
  }
`;
