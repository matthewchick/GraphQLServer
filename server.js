// https://graphql.org/graphql-js/running-an-express-graphql-server/
// https://blog.apollographql.com/tutorial-building-a-graphql-server-cddaa023c035
var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

const app = express();

app.listen(4000, () => {
    console.log('Listening')
})