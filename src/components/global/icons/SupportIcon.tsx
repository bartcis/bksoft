import React, { useContext } from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';

import ThemeContext from '../../context/ThemeContext';

interface IProps {
  link: string;
  status: string;
}

let currentTheme: string;

const SupportIcon = ({ link, status }: IProps) => {
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
            d="m53 0h-26c-3.0973662-.01064573-5.8287259 2.02768237-6.7 5h-17.3c-1.65685425 0-3 1.34314575-3 3v20c0 1.6568542 1.34314575 3 3 3 18.585 0 16.618-.066 17 .152v21.848c.0044086 3.8641657 3.1358343 6.9955914 7 7h26c3.8641657-.0044086 6.9955914-3.1358343 7-7v-46c-.0044086-3.86416566-3.1358343-6.99559136-7-7zm-50 29c-.55228475 0-1-.4477153-1-1v-20c0-.55228475.44771525-1 1-1h26c.5522847 0 1 .44771525 1 1v20c0 .5522847-.4477153 1-1 1h-2c-.5522847 0-1 .4477153-1 1v2.277c-5.972-3.413-5.629-3.277-6-3.277zm23.5 5.868c.3097067.1788102.6913257.1786223 1.0008562-.0004927.3095305-.1791149.4998504-.5098891.4991438-.8675073v-3h1c1.6568542 0 3-1.3431458 3-3v-19h26v42h-36v-18.7zm26.5 23.132h-12v-2c0-.5522847-.4477153-1-1-1s-1 .4477153-1 1v2h-12c-2.7600532-.0033061-4.9966939-2.2399468-5-5h36c-.0033061 2.7600532-2.2399468 4.9966939-5 5zm-21.184-51c-.4222546-1.19435087-1.5492146-1.99474861-2.816-2h-6.563c.7832059-1.8233578 2.5785527-3.00373042 4.563-3h26c2.7600532.00330612 4.9966939 2.23994685 5 5z"
          />
          <path
            className={status}
            d="m27 45h18.7l5.748 3.832c.3067571.2030724.7002429.2213171 1.0244752.0475019.3242323-.1738153.5268468-.5116189.5275248-.8795019v-3c1.6568542 0 3-1.3431458 3-3v-2c0-1.6568542-1.3431458-3-3-3h-26c-1.6568542 0-3 1.3431458-3 3v2c0 1.6568542 1.3431458 3 3 3zm-1-5c0-.5522847.4477153-1 1-1h26c.5522847 0 1 .4477153 1 1v2c0 .5522847-.4477153 1-1 1h-1c-.5522847 0-1 .4477153-1 1v2.131c-4.793-3.195-4.581-3.131-5-3.131h-19c-.5522847 0-1-.4477153-1-1z"
          />
          <path
            className={status}
            d="m25 15.424c-.0593193-2.101297-1.2918713-3.9918798-3.1906-4.8939869-1.8987287-.90210709-4.1429423-.66337424-5.8094.6179869-1.6664577-1.28136114-3.9106713-1.52009399-5.8094-.6179869-1.89872867.9021071-3.13128072 2.7926899-3.1906 4.8939869-.00121265 1.4535018.59289341 2.8440858 1.644 3.848l6.661 6.447c.3875966.3746537 1.0024034.3746537 1.39 0l6.662-6.448c1.050585-1.0037771 1.6443171-2.3939702 1.643-3.847zm-3.034 2.41-5.966 5.774-5.965-5.773c-.66096521-.6275864-1.03523052-1.4990508-1.03523052-2.4105s.37426531-1.7829136 1.03523052-2.4105c1.4209941-1.3523814 3.6530059-1.3523814 5.074 0l.2.19c.3878502.3759443 1.0041498.3759443 1.392 0l.195-.189c1.4209941-1.3523814 3.6530059-1.3523814 5.074 0 .66007.6279296 1.0333864 1.4993223 1.0326302 2.4103588s-.3755187 1.7818082-1.0366302 2.4086412z"
          />
        </g>
      </svg>
    </StyledLink>
  );
};

export default SupportIcon;

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
