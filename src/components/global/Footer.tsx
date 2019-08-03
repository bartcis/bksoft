import React from 'react';
import styled from 'styled-components';

interface IProps {
  theme: string;
}

let currentTheme: string;

const Footer = (props: IProps) => {
  currentTheme = props.theme;

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
    theme.styledColors[currentTheme].background};
  display: flex;
  border-top: 1px solid
    ${({ theme }) => theme.styledColors[currentTheme].border};
  padding: 0 0.5rem;
  justify-content: flex-end;
  align-items: center;
  border-radius: 0.75rem 0.75rem 0 0;
  h5 {
    margin: 0;
  }
`;
