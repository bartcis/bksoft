import React, { useContext } from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';

import ThemeContext from '../../context/ThemeContext';

let currentTheme: string;

const Logo = () => {
  const [theme] = useContext(ThemeContext);

  currentTheme = theme;

  return (
    <StyledLink to="/">
      <svg
        version="1.1"
        id="Layer_2"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 156.9 144.3"
      >
        <g>
          <path
            className="st0"
            d="M25.3,61.2c-1.3-2.3-2.6-4.6-3.6-7.1c-2.9-6.7-4.6-14-4.8-21.7C9,43.6,4.3,57.3,4.3,72
            c0,10.6,2.4,20.6,6.7,29.6c0.8,1.7,1.8,3.4,2.7,5.1c0-0.8-0.1-1.7-0.1-2.6c0-12.6,3.9-24.4,10.5-34.1C24.3,67,24.7,64.1,25.3,61.2z
            "
          />
          <path
            className="st1"
            d="M68.6,137.9c-11.8-7.1-21.5-17.3-28.1-29.4c-10-8.9-16.4-22-16.4-36.5c0-0.6,0-1.3,0-1.9
            c-6.6,9.7-10.5,21.4-10.5,34.1c0,0.9,0,1.7,0.1,2.6c9.1,15.5,24.1,27.1,41.9,31.7c5.5,1.4,11.3,2.2,17.3,2.2c0.2,0,0.4,0,0.6,0
            C71.8,139.7,70.2,138.8,68.6,137.9z"
          />
          <path
            className="st1"
            d="M63.2,4c-7.3,1-14.3,3.3-20.7,6.4c-1.1,0.5-2.1,1.1-3.1,1.7c-8.9,5-16.6,12-22.5,20.3c0.3,7.7,2,15,4.8,21.7
            c1,2.4,2.3,4.8,3.6,7.1c1.3-5.9,3.7-11.4,6.9-16.2c2-3,4.4-5.8,7-8.3c1.8-3.5,3.8-6.9,6.1-10.1c0.4-0.6,0.8-1.2,1.2-1.7
            c3.4-4.6,7.4-8.7,11.7-12.5c4-3.4,8.3-6.4,12.9-9C68.4,3.5,65.7,3.7,63.2,4z"
          />
          <path
            className="st2"
            d="M107.3,106.8c-8.8,8.7-20.9,14.1-34.3,14.1c-12.5,0-23.9-4.7-32.5-12.4c6.6,12.1,16.3,22.3,28.1,29.4
            c1.6,1,3.2,1.9,4.9,2.7c12.9-0.1,24.9-3.8,35.2-10v-25.3C108.2,105.8,107.8,106.3,107.3,106.8z"
          />
          <path
            className="st2"
            d="M110.6,81.2c-0.4-2.9-1-5.8-1.8-8.5c-0.8-2.5-1.7-4.9-2.8-7.2c-18.2-0.3-34.6-8-46.3-20.3
            c-2.1-2.2-4-4.5-5.7-6.9c-0.2-0.3-0.4-0.6-0.6-0.8c0,0.1,0,0.2,0,0.2c0.2,3.1,0.7,6.1,1.4,9c5.5,21.9,25.1,38.2,48.6,38.6
            c0.3,0,0.6,0,0.9,0c1.5,0,3.1-0.1,4.6-0.2c0.7-0.1,1.4-0.1,2.2-0.2C110.8,83.6,110.7,82.4,110.6,81.2z"
          />
          <path
            className="st2"
            d="M90.3,5.6C84.8,4.1,78.9,3.3,73,3.3c-0.6,0-1.3,0-1.9,0c-4.6,2.6-8.9,5.6-12.9,9c-4.3,3.7-8.3,7.9-11.7,12.5
            c-0.4,0.6-0.8,1.2-1.2,1.7c-2.3,3.2-4.3,6.6-6.1,10.1c2.5-2.4,5.3-4.6,8.3-6.4c0.4-0.2,0.8-0.4,1.1-0.7c1.6-0.9,3.3-1.8,5.1-2.5
            c5.9-2.5,12.4-3.9,19.2-3.9c2.8,0,5.5,0.2,8.1,0.7c10.8,1.8,20.5,7.2,27.6,14.9V13.4C103.1,9.9,96.9,7.3,90.3,5.6z"
          />
          <path
            className="st1"
            d="M105.4,64.6c-1.3-2.6-2.8-5-4.5-7.3c-0.9,0-1.9,0.1-2.9,0.1c-1.9,0-3.8-0.1-5.6-0.3C80.8,56,70,51.6,61.2,44.8
            c-2.6-2-5-4.2-7.3-6.6c1.8,2.4,3.7,4.8,5.7,6.9c11.7,12.3,28,20,46.3,20.3C105.8,65.2,105.6,64.9,105.4,64.6z"
          />
          <path
            className="st0"
            d="M87.7,44.9c-1.7-1.1-3.4-2.1-5.2-3c-6.8-3.3-14.4-5.2-22.4-5.2c-2.3,0-4.5,0.2-6.7,0.5c0,0.1,0,0.2,0,0.3
            c0.2,0.3,0.4,0.6,0.6,0.8c2.2,2.4,4.7,4.6,7.3,6.6C70,51.6,80.8,56,92.5,57.1c1.9,0.2,3.7,0.3,5.6,0.3c1,0,1.9,0,2.9-0.1
            C97.3,52.4,92.8,48.2,87.7,44.9z"
          />
          <path
            className="st1"
            d="M150.3,34.3c-1.7,0-3.3,0.1-4.9,0.3c-2.6,0.4-5.1,1-7.5,1.8c-1.7,0.6-3.3,1.4-4.9,2.2c-5.2,2.9-9.7,7-12.9,12
            V22.1c-1.9-1.8-3.8-3.4-5.8-5v109.6c2-1.5,4-3.2,5.8-5V66.2c0.5,0,0.9-0.1,1.4-0.2c0.1,0,0.1,0,0.2,0c2-0.3,4-0.7,5.9-1.3
            c4.7-1.5,8.9-3.9,12.5-7c1.3-1.1,2.5-2.3,3.6-3.5c4.8-5.4,8-12.2,8.8-19.8C151.7,34.3,151,34.3,150.3,34.3z"
          />
        </g>
      </svg>
    </StyledLink>
  );
};

export default Logo;

const StyledLink = styled(Link)`
  svg {
    width: 45px;
    .st0 {
      transition: fill 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
      fill: ${({ theme }) => theme.styledColors[currentTheme].leadColorDark};
    }
    .st1 {
      transition: fill 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
      fill: ${({ theme }) => theme.styledColors[currentTheme].leadColorMid};
    }
    .st2 {
      transition: fill 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
      fill: ${({ theme }) => theme.styledColors[currentTheme].leadColorLight};
    }
  }
`;
