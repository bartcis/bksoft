import React, { useContext } from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';

import ThemeContext from '../../context/ThemeContext';

interface IProps {
  link: string;
  status: string;
}

let currentTheme: string;

const ReturnIcon = ({ link, status }: IProps) => {
  const [theme] = useContext(ThemeContext);

  currentTheme = theme;

  return (
    <StyledLink to={link}>
      <svg
        version="1.1"
        id="Layer_1"
        x="0px"
        y="0px"
        viewBox="-383 145 512 512"
      >
        <g>
          <path
            className={status}
            d="M-134.9,312.7l0.1-86.9c0-8.1-5.9-13.3-10.6-9.1l-203.3,174.7c-4.7,4-4.7,14.2,0,18.4l203.1,175.6c4.7,4,10.5-1,10.5-9
		l0.1-77.7c0-4.9,2.7-8.8,5.9-8.8H89.2c5,0,9-6.1,9-13.4V334.3c0-7.2-3.9-13-8.7-13h-219C-132.5,320.8-134.9,317.2-134.9,312.7z
		 M82.3,457.6c0,4.5-2.4,8.1-5.4,8.1H-135h-10c-3.3,0-6,4-6,9v14.9v50.2c0,5.8-4.2,9.4-7.6,6.6l-161.1-139.3c-3.4-2.8-3.3-10.2,0-13
		L-158.1,255c3.3-2.8,7.3,0.7,7.3,6.4l-0.1,59.4v14.8c0,5.1,2.7,9.1,6.1,9.1h9.9H76.8c3,0,5.5,3.7,5.5,8.2V457.6z"
          />
        </g>
      </svg>
    </StyledLink>
  );
};

export default ReturnIcon;

const StyledLink = styled(Link)`
  svg {
    width: 30px;
    height: 30px;
    margin: 0.75rem 0;
    :hover {
      path {
        fill: ${({ theme }) => theme.styledColors[currentTheme].contrast1};
      }
    }
    path {
      transition: fill 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
    .unactive {
      fill: ${({ theme }) => theme.styledColors[currentTheme].unactive};
    }
    .active {
      fill: ${({ theme }) => theme.styledColors[currentTheme].leadColorMid};
    }
  }
`;
