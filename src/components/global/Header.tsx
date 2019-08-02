import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';

interface IProps {
  theme: string;
}

let currentTheme: string;

const Header = (props: IProps) => {

  currentTheme = props.theme;

  return (
    <Head>
      <Link to='/'>LOGO</Link>
      <h1>BK Soft</h1>
    </Head>
  )
}

export default Header;

const Head = styled.header`
  width: 100vw;
  height: 60px;
  display: flex;
  background-color: ${({ theme }) => theme.styledColors[currentTheme].header};
`
