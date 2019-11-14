// https://graphql.org/graphql-js/running-an-express-graphql-server/
// https://blog.apollographql.com/tutorial-building-a-graphql-server-cddaa023c035
var express = require('express');
var expressGraphQL = require('express-graphql');

const app = express();

app.use('/graphql', expressGraphQL({
    graphiql: true
}));

app.listen(4000, () => {
    console.log('Listening')
})