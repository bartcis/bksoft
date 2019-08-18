import React, { useContext } from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';

import ThemeContext from '../../context/ThemeContext';

interface IProps {
  link: string;
  status: string;
}

let currentTheme: string;

const StartTestIcon = ({ link, status }: IProps) => {
  const [theme] = useContext(ThemeContext);

  currentTheme = theme;

  return (
    <StyledLink to={link}>
      <svg
        height="512"
        viewBox="0 0 60 60"
        width="512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            className={status}
            d="m30 60c3.3386495.0075123 6.6724636-.2543371 9.969-.783 24-3.861 26.981-19.074 5.957-25.106-1.071-8.138-14.633-21.255-15.234-21.832-.3868237-.3708033-.9971763-.3708033-1.384 0-.6.577-14.163 13.694-15.234 21.832-8.822 2.531-14.074 6.944-14.074 11.889 0 7.851 13.178 14 30 14zm0-45.6c4.476 4.438 14 15.056 14 20.693 0 7.116-6.28 12.907-14 12.907s-14-5.791-14-12.909c0-5.637 9.524-16.255 14-20.691zm-15.94 21.8c.0926866 1.198509.340074 2.3799858.736 3.515-5.683 1.477-8.796 3.692-8.796 6.285 0 .5522847.44771525 1 1 1s1-.4477153 1-1c0-1.277 2.366-3.108 7.612-4.431 2.8586962 5.2636904 8.3986473 8.5099601 14.388 8.431 8.422 0 15.329-6.1 15.94-13.8 7.47 2.254 12.06 5.953 12.06 9.8 0 4.882-7.546 9.505-18.352 11.243-17.914 2.926-37.648-3.023-37.648-11.243 0-3.847 4.59-7.546 12.06-9.8z"
          />
          <path
            className={status}
            d="m30 54c11.635 0 24-2.8 24-8 0-.5522847-.4477153-1-1-1s-1 .4477153-1 1c0 2.505-8.369 6-22 6-.5522847 0-1 .4477153-1 1s.4477153 1 1 1z"
          />
          <path
            className={status}
            d="m19 36.091c.5522847 0 1-.4477153 1-1 0-2.562 4.511-9.175 10.725-15.724.380248-.4009587.3634587-1.0342519-.0375-1.4145-.4009587-.380248-1.0342519-.3634587-1.4145.0375-5.2 5.481-11.273 13.249-11.273 17.101 0 .5522847.4477153 1 1 1z"
          />
          <path
            className={status}
            d="m25 5c0 2.76142375 2.2385763 5 5 5s5-2.23857625 5-5-2.2385763-5-5-5c-2.7600532.00330612-4.9966939 2.23994685-5 5zm8 0c0 1.65685425-1.3431458 3-3 3s-3-1.34314575-3-3 1.3431458-3 3-3 3 1.34314575 3 3z"
          />
          <circle id="Oval" cx="20" cy="39" r="1" />
        </g>
      </svg>
    </StyledLink>
  );
};

export default StartTestIcon;

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
