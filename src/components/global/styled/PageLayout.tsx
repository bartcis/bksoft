import styled from 'styled-components';

const PageLayout = styled.article`
  display: flex;
  height: 100vh;
  width: 100%;
  section {
    width: calc(100% - 200px);
  }
`;

export default PageLayout;
