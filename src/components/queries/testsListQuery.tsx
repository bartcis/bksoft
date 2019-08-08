import gql from 'graphql-tag';

const testsQuery = gql`
  {
    testListQuery {
      name
      icon
      id
    }
  }
`;

export default testsQuery;
