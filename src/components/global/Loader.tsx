import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <Container>
      <Bounces>
        <div></div>
        <div></div>
        <div></div>
      </Bounces>
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

const Bounces = styled.div`
  @keyframes bouncing-loader {
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0.1;
      transform: translateY(-1rem);
    }
  }
  display: flex;
  justify-content: center;
  div {
    width: 1rem;
    height: 1rem;
    margin: 3rem 0.2rem;
    background-color: #0295ff;
    border-radius: 50%;
    animation: bouncing-loader 0.6s infinite alternate;
  }

  div:nth-child(2) {
    animation-delay: 0.2s;
  }
  div:nth-child(3) {
    animation-delay: 0.4s;
  }
`;
