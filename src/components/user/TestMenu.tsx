import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

import ThemeContext from '../context/ThemeContext';
import MenuTitleContext from '../context/MenuTitleContext';

let currentTheme: string;

interface IProps {
  path: string;
}

const TestMenu = (props: IProps) => {
  const [theme] = useContext(ThemeContext);
  const [menuTitle] = useContext(MenuTitleContext);

  currentTheme = theme;

  return (
    <Menu>
      <Content>
        <h2>{menuTitle}</h2>
        <ul>
          <li>
            <StyledLink to="/">
              <Image
                src="/images/icons/icon-start-tets.svg"
                alt="MyPer - testy psychologiczne - Strona Główna."
              />
              <h3>Zacznij test</h3>
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/about">
              <Image
                src="/images/icons/icon-theory.svg"
                alt="MyPer - testy psychologiczne - O aplikacji."
              />
              <h3>Teoria do testu</h3>
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/provide-support">
              <Image
                src="/images/icons/icon-results.svg"
                alt="MyPer - testy psychologiczne - Wesprzyj projekt."
              />
              <h3>Wyniki w Polsce</h3>
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/">
              <Image
                src="/images/icons/icon-back.svg"
                alt="MyPer - testy psychologiczne - Wesprzyj projekt."
              />
              <h3>Powrót</h3>
            </StyledLink>
          </li>
        </ul>
      </Content>
    </Menu>
  );
};

export default TestMenu;

const Image = styled.img`
  width: 30px;
  margin-right: 1rem;
`;

const Content = styled.div`
  position: fixed;
  width: 207px;
  max-width: 207px;
  height: 100%;
  padding: 1rem;
  background-color: ${({ theme }) =>
    theme.styledColors[currentTheme].backgroundTwo};
  border-right: 1px solid
    ${({ theme }) => theme.styledColors[currentTheme].border};
  box-shadow: ${({ theme }) => theme.styledColors[currentTheme].shadow} 0px 5px
    5px 5px;
`;

const Menu = styled.aside`
  width: 240px;
  h2 {
    margin: 0;
    color: ${({ theme }) => theme.styledColors[currentTheme].link};
    height: 3rem;
    border-bottom: 1px solid
      ${({ theme }) => theme.styledColors[currentTheme].borderTwo};
  }
  ul {
    padding: 0;
    list-style: none;
    li {
      padding: 0.5rem 0;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  :hover {
    h3 {
      color: ${({ theme }) => theme.styledColors[currentTheme].hoverState};
    }
  }
  h3 {
    margin: 0;
    color: ${({ theme }) => theme.styledColors[currentTheme].mainText};
    transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
`;
