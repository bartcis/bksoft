const { gql } = require('apollo-server');

const typeDefs = gql`
  type SingleMenuList {
    label: String
    link: String
  }

  type SingleMenu {
    title: String
    slug: String
    list: [SingleMenuList]
  }

  type Menu {
    main: SingleMenu
  }

  type Query {
    menusQuery: [Menu]
  }
`;

module.exports = typeDefs;
