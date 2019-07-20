import React from 'react';
import styled, { createGlobalStyle } from 'styled-components'

import Pet from './user/pet';

export default function App () {
  return (
    <section>
      <GlobalStyle/>
      <Background>
        <h1 id='first'>Adopt me!</h1>
        <Pet name='Luna' animal='Dog' breed='red' />
        <Pet name='Azor' animal='Dog' breed='brown' />
        <Pet name='Mruczek' animal='Caty' breed='black' />
      </Background>
    </section>
  )
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`

const Background = styled.div`
    background-color: peru;
    color: whitesmoke;
`
