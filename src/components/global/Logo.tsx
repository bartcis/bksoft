import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';

const Logo = () => {
  return (
    <StyledLink to="/">
      <img
        src="./images/my-per_logo.svg"
        alt="MyPer - darmow aplikacja do testów osobowości"
      />
    </StyledLink>
  );
};

export default Logo;

const StyledLink = styled(Link)`
  width: 130px;
`;
