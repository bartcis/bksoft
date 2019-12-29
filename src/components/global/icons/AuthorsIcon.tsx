import React, { useContext } from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';

import ThemeContext from '../../context/ThemeContext';

interface IProps {
  link: string;
  status: string;
}

let currentTheme: string;

const AuthorsIcon = ({ link, status }: IProps) => {
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
            d="m9.494 37.254c-5.16656131.4472373-9.21108974 4.6376792-9.47501376 9.8168414-.26392401 5.1791622 3.33367934 9.7590381 8.42801376 10.7291586.67524413 1.3441754 2.0487614 2.1946506 3.553 2.2h24c1.5042386-.0053494 2.8777559-.8558246 3.553-2.2 5.0972312-.9669804 8.6983713-5.5480619 8.4343323-10.7294806s-4.3122085-9.3727004-9.4813323-9.8165194c-2.5208044-.3335775-5.064221-.4653295-7.606-.394-.330609-1.43889-.5707461-2.8970795-.719-4.366 1.818768-1.8310324 3.1261606-4.1065577 3.792-6.6.3377284.0708702.6819161.1063949 1.027.106v4c0 .5522847.4477153 1 1 1 .45 0 .026.211 7.32-5h11.68c2.7600532-.0033061 4.9966939-2.2399468 5-5v-16c-.0033061-2.76005315-2.2399468-4.99669388-5-5h-20c-1.2891813.00180962-2.5273851.50368728-3.454 1.4-2.4196711-.88417381-4.9701984-1.35736996-7.546-1.4-.347 0-8.537.05-11.8 4.4-2.1 2.806-1.489 10.057-1.254 12.2-.939.944-.946 2.694-.946 3.333 0 4.384 2.661 5.6 4.009 5.936.655251 2.5120961 1.9667294 4.8047673 3.8 6.643-.1411084 1.4640046-.3749109 2.9175879-.7 4.352-2.5445996-.0671341-5.0905727.0632571-7.615.39zm22.461 10.746c.3032562.1959703.5566327.4599613.74.771-2.1209583 1.9536233-3.9909505 4.1632172-5.567 6.578.3916931-5.5703822 1.5905458-11.0543164 3.559-16.28 1.6517457.686053 3.030295 1.8990077 3.921 3.45-1.6385975.9288572-2.8976124 2.4052611-3.556 4.17-.1120621.2970694-.0714819.630192.1086211.8916706.1801031.2614785.4768782.4181374.7943789.4193294zm-6.935 10h-2.04c-.1206271-5.6691724-1.0479352-11.2922824-2.754-16.7 2.4279416.9395465 5.1190584.9395465 7.547 0-1.7051827 5.4078965-2.632141 11.0309273-2.753 16.7zm-8.072-11.316c-.6588674-1.765633-1.9190417-3.2425049-3.559-4.171.8881443-1.5542098 2.2688712-2.7681516 3.924-3.45 1.9720312 5.2253163 3.1709965 10.7104391 3.559 16.282-1.5757932-2.4158648-3.4461719-4.6261903-5.568-6.58.1776734-.2995957.4144827-.5598818.696-.765.3212672-.0002439.6228543-.1548257.8106349-.4155001s.2388857-.5956946.1373651-.9004999zm-6.948 9.316v-6c0-.5522847-.44771525-1-1-1s-1 .4477153-1 1v5.64c-3.86022071-1.1489019-6.35874698-4.8795355-5.95155276-8.8864635.40719423-4.0069281 3.60512534-7.1586731 7.61755276-7.5075365l4.159-.362c-1.1587913 1.0437152-2.0933728 2.3120515-2.747 3.728-.108154.256823-.1042384.5471267.0108031.8009393.1150414.2538125.330773.4481099.5951969.5360607 1.2734964.4633421 2.3339281 1.3758397 2.982 2.566-.6538628.5657794-1.1850842 1.2593279-1.561 2.038-.2158894.4323438-.0917218.9572146.295 1.247 2.691 2.018 5.437 6.023 6.817 8.2h-8.217c-1.1045695 0-2-.8954305-2-2zm36-8.39c-.0087619 3.7074627-2.4470704 6.9707323-6 8.03v-5.64c0-.5522847-.4477153-1-1-1s-1 .4477153-1 1v6c0 1.1045695-.8954305 2-2 2h-8.217c1.38-2.177 4.126-6.182 6.817-8.2.3884941-.2883628.5148281-.8134915.3-1.247-.3768182-.7803368-.9098202-1.4750093-1.566-2.041.647066-1.1922156 1.7103268-2.1045482 2.987-2.563.2644239-.0879508.4801555-.2822482.5951969-.5360607.1150415-.2538126.1189571-.5441163.0108031-.8009393-.6530613-1.4143627-1.5862054-2.6815744-2.743-3.725l4.153.359c4.3446792.3629776 7.680744 4.0042208 7.663 8.364zm-11-45.61h20c1.6568542 0 3 1.34314575 3 3v16c0 1.6568542-1.3431458 3-3 3-13.062 0-12.211-.08-12.581.186l-5.419 3.871v-3.057c0-.5522847-.4477153-1-1-1h-1c-1.6568542 0-3-1.3431458-3-3v-16c0-1.65685425 1.3431458-3 3-3zm-21.2 3.6c2.662-3.549 10.126-3.6 10.2-3.6 2.1692507.04692104 4.319318.41768042 6.379 1.1-.2356969.57515696-.3612083 1.18948472-.37 1.811-1.1038235-.41169693-2.3081977-.47074516-3.447-.169-5.111.873-6.11-1.088-9.009.361-2.308 1.156-3.553 4.416-3.553 6.897-.0893436 1.4099425-.3523308 2.8034725-.783 4.149-.1033346-.0352727-.2084854-.064982-.315-.089-.287-2.866-.525-8.56.898-10.46zm-1.8 14.33c0-1.621.36-1.932.357-1.932.2417109.0151678.4730261.1037863.663.254.0136536 1.7470641.155703 3.4907617.425 5.217-.764-.529-1.445-1.557-1.445-3.539zm4.764 7.641c-1.506-3.165-1.764-6.871-1.764-10.413.554393-1.6690097.8905164-3.4027341 1-5.158 0-1.875.983-4.374 2.447-5.105 2.047-1.026 3.045.745 8.45-.18 1.0486233-.34979951 2.2013739-.17577135 3.1.468v13.817c.0026446 1.6264039.7974297 3.1495554 2.13 4.082-1.16 4.14-3.765 7.918-8.127 7.918-3.108 0-5.542-1.825-7.236-5.429zm11.562 6.294c.1660188 1.3102901.4080941 2.6098171.725 3.892-1.724 3-8.37 3.02-10.093 0 .3115819-1.2800015.549638-2.5767893.713-3.884 2.6889484 1.5069981 5.9688421 1.5039664 8.655-.008z"
          />
          <path
            className={status}
            d="m39 16h3v3c0 1.1045695.8954305 2 2 2h2c1.1045695 0 2-.8954305 2-2v-3h3c1.1045695 0 2-.8954305 2-2v-2c0-1.1045695-.8954305-2-2-2h-3v-3c0-1.1045695-.8954305-2-2-2h-2c-1.1045695 0-2 .8954305-2 2v3h-3c-1.1045695 0-2 .8954305-2 2v2c0 1.1045695.8954305 2 2 2zm0-4h3c1.1045695 0 2-.8954305 2-2v-3h2v3c0 1.1045695.8954305 2 2 2h3v2h-3c-1.1045695 0-2 .8954305-2 2v3h-2v-3c0-1.1045695-.8954305-2-2-2h-3z"
          />
        </g>
      </svg>
    </StyledLink>
  );
};

export default AuthorsIcon;

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