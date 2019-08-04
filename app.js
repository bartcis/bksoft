const { ApolloServer } = require('apollo-server');

// const api = require('./server/api');
const menus = require('./server/api');

const typeDefs = require('./server/schema');

console.log(menus);

const resolvers = {
  Query: {
    menusQuery: () => menus,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
