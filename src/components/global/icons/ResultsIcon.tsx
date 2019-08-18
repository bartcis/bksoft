import React, { useContext } from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';

import ThemeContext from '../../context/ThemeContext';

interface IProps {
  link: string;
  status: string;
}

let currentTheme: string;

const ResultsIcon = ({ link, status }: IProps) => {
  const [theme] = useContext(ThemeContext);

  currentTheme = theme;

  return (
    <StyledLink to={link}>
      <svg
        height="512"
        viewBox="0 0 50 60"
        width="512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            className={status}
            d="m46 43v-12.825c-.0001921-.3762551-.2115646-.7205565-.547-.891-3.767-1.918-9.658-2.72-13.68.057-6.565 4.516-13.17 2.47-17.553-.043-2.8721488-1.5091143-6.16556247-2.017255-9.359-1.444-.49400566.0693398-.86135298.4921519-.861.991v14.155c0 1.6568542 1.34314575 3 3 3h36c1.6568542 0 3-1.3431458 3-3zm-40 0v-13.265c2.48384525-.3112779 5.0035565.1422213 7.223 1.3 6.9 3.958 13.892 3.942 19.685-.044 2.739-1.891 7.226-1.951 11.092-.191v12.2c0 .5522847-.4477153 1-1 1h-36c-.55228475 0-1-.4477153-1-1z"
          />
          <path
            className={status}
            d="m35 60h2c1.1045695 0 2-.8954305 2-2v-8h6c2.7600532-.0033061 4.9966939-2.2399468 5-5v-40c-.0033061-2.76005315-2.2399468-4.99669388-5-5h-40c-2.76005315.00330612-4.99669388 2.23994685-5 5v40c.00330612 2.7600532 2.23994685 4.9966939 5 5h4v2c0 1.1045695.8954305 2 2 2v4c0 1.1045695.8954305 2 2 2h2c1.1045695 0 2-.8954305 2-2v-4c1.1045695 0 2-.8954305 2-2v-2h14v8c0 1.1045695.8954305 2 2 2zm2-2h-2v-8h2zm-35-13v-40c0-1.65685425 1.34314575-3 3-3h40c1.6568542 0 3 1.34314575 3 3v40c0 1.6568542-1.3431458 3-3 3h-40c-1.65685425 0-3-1.3431458-3-3zm13 13h-2v-4h2zm2-6h-6v-2h6z"
          />
          <path
            className={status}
            d="m23 10h4c1.6568542-.00000002 3-1.34314577 3-3s-1.3431458-2.99999998-3-3h-4c-1.6568542.00000002-3 1.34314577-3 3s1.3431458 2.99999998 3 3zm0-4h4c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1h-4c-.5522847 0-1-.44771525-1-1s.4477153-1 1-1z"
          />
          <path
            className={status}
            d="m6 24h18c1.1045695 0 2-.8954305 2-2v-6c0-1.1045695-.8954305-2-2-2h-18c-1.1045695 0-2 .8954305-2 2v6c0 1.1045695.8954305 2 2 2zm0-8h18v6h-18z"
          />
          <path
            className={status}
            d="m29 17c0 .5522847.4477153 1 1 1h15c.5522847 0 1-.4477153 1-1s-.4477153-1-1-1h-15c-.5522847 0-1 .4477153-1 1z"
          />
          <path
            className={status}
            d="m30 20c-.5522847 0-1 .4477153-1 1s.4477153 1 1 1h5c.5522847 0 1-.4477153 1-1s-.4477153-1-1-1z"
          />
          <path
            className={status}
            d="m45 20h-6c-.5522847 0-1 .4477153-1 1s.4477153 1 1 1h6c.5522847 0 1-.4477153 1-1s-.4477153-1-1-1z"
          />
        </g>
      </svg>
    </StyledLink>
  );
};

export default ResultsIcon;

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
