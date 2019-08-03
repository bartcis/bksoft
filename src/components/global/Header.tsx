import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';

interface IProps {
  theme: string;
}

let currentTheme: string;

const Header = (props: IProps) => {
  currentTheme = props.theme;

  return (
    <Head>
      <Logo />
    </Head>
  );
};

export default Header;

const Head = styled.header`
  background-color: ${({ theme }) =>
    theme.styledColors[currentTheme].background};
  display: flex;
  border-bottom: 1px solid
    ${({ theme }) => theme.styledColors[currentTheme].border};
  padding: 0 0.5rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 0 0 0.75rem 0.75rem;
`;
