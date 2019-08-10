import React, {
  FunctionComponent,
  useContext,
  useEffect,
  Suspense,
} from 'react';
import { Link, RouteComponentProps, Router } from '@reach/router';
import styled from 'styled-components';

interface IProps {
  name: string;
  icon: string;
  id: string;
}

const TestGridElement = ({ id, icon, name }: IProps) => {
  return (
    <Test to={`test/${id}`}>
      <Wrapper>
        <Image src={icon} alt={`${name}- darmowy test online`} />
        <h2>{name}</h2>
      </Wrapper>
    </Test>
  );
};

export default TestGridElement;

const Wrapper = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${({ theme }) => theme.styledColors.base.background};
  border-radius: 5px;
  text-align: center;
  padding: 1.5rem 1rem 1rem;
  margin: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  box-shadow: #d0d0d0 0px 5px 10px 0px;
  transition: box-shadow 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    box-shadow: #d0d0d0 0px 15px 10px 0px;
  }
`;

const Test = styled(Link)`
  text-decoration: none;
`;

const Image = styled.img`
  width: 80px;
`;
