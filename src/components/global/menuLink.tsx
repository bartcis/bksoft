import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';
import console = require('console');

interface IProps {
  link: string;
  content: string;
}

const MenuLink = ({ link, content }: IProps) => {
  console.log(link, content);
  return (
    <StyledLink
      to={link}
      dangerouslySetInnerHTML={{ __html: content }}
    ></StyledLink>
  );
};

export default MenuLink;

const StyledLink = styled(Link)`
  width: 130px;
`;
