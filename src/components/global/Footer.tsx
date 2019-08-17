import React, { useContext } from 'react';
import styled from 'styled-components';
import ThemeContext from '../context/ThemeContext';

let currentTheme: string;

const Footer = () => {
  const [theme] = useContext(ThemeContext);

  currentTheme = theme;

  return (
    <Foot>
      <h5>
        © Copyright {new Date().getFullYear()}
        <a
          className="link link--footer"
          href="https://bedekodzic.pl/"
          target="_blank"
        >
          bedekodzic.pl
        </a>
      </h5>
    </Foot>
  );
};

export default Footer;

const Foot = styled.footer`
  background-color: ${({ theme }) =>
    theme.styledColors[currentTheme].backgroundFooter};
  display: flex;
  border-top: 1px solid
    ${({ theme }) => theme.styledColors[currentTheme].border};
  padding: 0 0.5rem;
  justify-content: flex-end;
  align-items: center;
  box-shadow: ${({ theme }) => theme.styledColors[currentTheme].shadow} 0px 0px
    10px 0px;

  h5 {
    margin: 0;
  }
`;
