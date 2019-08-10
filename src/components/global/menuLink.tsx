import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

import ThemeContext from '../context/ThemeContext';

let currentTheme: string;

interface IProps {
  link: string;
  icon: string;
  alt: string;
  title: string;
  status: string;
}

const MenuLink = ({ link, icon, alt, title, status }: IProps) => {
  const [theme] = useContext(ThemeContext);

  currentTheme = theme;
  return (
    <StyledLink to={link}>
      <Image src={icon} alt={alt} />
      <h3 className={status}>{title}</h3>
    </StyledLink>
  );
};

export default MenuLink;

const Image = styled.img`
  width: 30px;
  margin-right: 1rem;
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
    color: ${({ theme }) => theme.styledColors[currentTheme].link};
    transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  .active {
    color: ${({ theme }) => theme.styledColors[currentTheme].activeLink};
  }
`;
