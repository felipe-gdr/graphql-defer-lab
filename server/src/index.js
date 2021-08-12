const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { schema, root} = require('./schema')
const cors = require('cors')

const app = express();

app.use(cors())

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  }),
);

app.listen(4044);