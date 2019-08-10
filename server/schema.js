const { gql } = require('apollo-server');

const typeDefs = gql`
  type TestList {
    nameFull: String!
    nameShort: String!
    icon: String!
    id: String!
    theme: String!
  }

  type Query {
    testListQuery: [TestList]
    singleTestShort(id: String!): TestList
  }
`;

module.exports = typeDefs;
