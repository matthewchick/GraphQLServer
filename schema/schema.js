const graphql = require('graphql');
// https://medium.com/front-end-weekly/introduction-to-lodash-71dbee093b49
const _ = require('lodash');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema
} = graphql;

const users = [
    { id: '23', firstName: 'Bill', age: 20},
    { id: '47', firstName: 'Samantha', age: 21}
]
// https://graphql.org/graphql-js/type/
const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: GraphQLString },
        firstName: { type: GraphQLString },
        age: { type: GraphQLInt }
    }
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLString}},
            resolve(parentValue, args) {
                return _.find(users, { id: args.id })
            }
        }       
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});