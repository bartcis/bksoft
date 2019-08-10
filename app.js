const { ApolloServer } = require('apollo-server');

const testListsApi = require('./server/testListApi');
const typeDefs = require('./server/schema');

const resolvers = {
  Query: {
    testListQuery: () => testListsApi,
    singleTestShort: (obj, args) => {
      for (const rec of testListsApi) {
        if (rec.id === args.id) {
          return rec;
        }
      }
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
