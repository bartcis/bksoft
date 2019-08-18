import React from 'react';
import styled from 'styled-components';

import Logo from './icons/Logo';

const Loader = () => {
  return (
    <Container>
      <Logo />
    </Container>
  );
};

export default Loader;

const Container = styled.section`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;
