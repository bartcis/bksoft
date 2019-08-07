import React, { useContext } from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import AppContext from '../AppContext';

let currentTheme: string;

const Header = () => {
  const [theme] = useContext(AppContext);

  currentTheme = theme.theme;

  return (
    <Head>
      <Logo />
    </Head>
  );
};

export default Header;

const Head = styled.header`
  position: fixed;
  width: 100%;
  height: 4rem;
  background-color: ${({ theme }) =>
    theme.styledColors[currentTheme].background};
  display: flex;
  border-bottom: 1px solid
    ${({ theme }) => theme.styledColors[currentTheme].border};
  padding: 0 1rem;
  justify-content: space-between;
  align-items: center;
  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
`;
