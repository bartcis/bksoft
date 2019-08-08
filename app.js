const { ApolloServer } = require('apollo-server');

const testListsApi = require('./server/testListApi');

const typeDefs = require('./server/schema');

console.log(testListsApi);

const resolvers = {
  Query: {
    testListQuery: () => testListsApi,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
