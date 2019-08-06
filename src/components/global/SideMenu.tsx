import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import AppContext from './AppContext';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import console = require('console');

interface IProps {
  type: string;
  path: string[];
}

let currentTheme: string;

const menusQuery = gql`
  {
    menusQuery {
      main {
        title
        slug
        list {
          link
          label
        }
      }
    }
  }
`;

const SideMenu = ({ type }: IProps) => {
  const [theme] = useContext(AppContext);

  console.log(type);
  currentTheme = theme.theme;

  return (
    <Query query={menusQuery}>
      {({ loading, error, data }) => {
        if (loading) return <div>Ładuje dane...</div>;
        if (error) return <div>Wystąpił błąd {error}</div>;
        console.log(data);
        return (
          <Menu>
            <Content>
              <h2 dangerouslySetInnerHTML={{ __html: data.title }}></h2>
              <ul>
                {/* {data.list.map(item => (
                  <li key={item.label}>
                    <StyledLink to={item.link}>
                      <h3 dangerouslySetInnerHTML={{ __html: item.label }}></h3>
                    </StyledLink>
                  </li>
                ))} */}
              </ul>
            </Content>
          </Menu>
        );
      }}
    </Query>
  );
};

export default SideMenu;

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
