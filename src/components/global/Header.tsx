import React, { useContext } from 'react';
import styled from 'styled-components';

import ThemeContext from '../context/ThemeContext';
import MenuTitleContext from '../context/MenuTitleContext';

let currentTheme: string;

const Header = () => {
  const [theme] = useContext(ThemeContext);
  const [menuTitle] = useContext(MenuTitleContext);

  currentTheme = theme;

  return (
    <Head>
      <h3>{menuTitle}</h3>
    </Head>
  );
};

export default Header;

const Head = styled.header`
  position: fixed;
  width: 100%;
  height: 3rem;
  background-color: ${({ theme }) =>
    theme.styledColors[currentTheme].backgroundHeader};
  display: flex;
  border-bottom: 1px solid
    ${({ theme }) => theme.styledColors[currentTheme].border};
  padding: 0 1rem;
  justify-content: space-between;
  align-items: center;
  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  box-shadow: ${({ theme }) => theme.styledColors[currentTheme].shadow} 0px 3px
    3px 0px;
`;
