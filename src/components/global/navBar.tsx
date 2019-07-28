import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';

const NavBar = () => {
  return (
    <Header>
      <Link to='/'>Adopt Me!</Link>
    </Header>
  )
}

export default NavBar;

const Header = styled.header`
  background-color: pink;
  width: 100%;
  height: 60px;
`
