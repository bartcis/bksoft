import React from 'react';
import styled from 'styled-components';
import console = require('console');
import { Link } from '@reach/router';

interface IProps {
  theme: string;
  data: {
    title: string;
    menu: { label: string; link: string }[];
  };
}

let currentTheme: string;

const StyledSideMenu = ({ theme, data }: IProps) => {
  currentTheme = theme;

  return (
    <Menu>
      <Content>
        <h2 dangerouslySetInnerHTML={{ __html: data.title }}></h2>
        <ul>
          {data.menu.map(item => (
            <li key={item.label}>
              <StyledLink to={item.link}>
                <p dangerouslySetInnerHTML={{ __html: item.label }}></p>
              </StyledLink>
            </li>
          ))}
        </ul>
      </Content>
    </Menu>
  );
};

export default StyledSideMenu;

const Content = styled.div`
  position: fixed;
`;

const Menu = styled.aside`
  width: 200px;
  background-color: ${({ theme }) =>
    theme.styledColors[currentTheme].background};
  border-right: 1px solid
    ${({ theme }) => theme.styledColors[currentTheme].border};
  padding: 1rem;
  border-radius: 0 0.75rem 0.75rem 0;
  h2 {
    margin: 0;
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
  :hover {
    p {
      color: ${({ theme }) => theme.styledColors[currentTheme].hoverState};
    }
  }
  p {
    margin: 0;
    text-transform: uppercase;
    color: ${({ theme }) => theme.styledColors[currentTheme].link};
    transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
`;
