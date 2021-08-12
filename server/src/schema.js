const { buildSchema } = require('graphql');


// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello: Hello!
    deferred: Deferred!
  }

  type Hello {
      message: String
  }

  type Deferred {
      message: String
  }
`);

const root = {
    hello: () => {
      return {message: 'Hello world!'};
    },
    deferred: async function stream() {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve({message: "this took a while"})
          }, 5000)
        });
    }
  };

  module.exports = {
      schema,
      root
  }