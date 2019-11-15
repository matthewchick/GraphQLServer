// https://graphql.org/graphql-js/running-an-express-graphql-server/
// https://blog.apollographql.com/tutorial-building-a-graphql-server-cddaa023c035
const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require ('./schema/schema');

const app = express();

app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('Listening')
})