const { gql } = require('apollo-server');

const typeDefs = gql`
  type TestList {
    name: String
    icon: String
    id: String
  }

  type Query {
    testListQuery: [TestList]
  }
`;

module.exports = typeDefs;
