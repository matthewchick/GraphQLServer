const graphql = require('graphql');
// https://medium.com/front-end-weekly/introduction-to-lodash-71dbee093b49
const _ = require('lodash');
const axios = require('axios');

const { GraphQLObjectType,GraphQLString,GraphQLInt,GraphQLSchema} = graphql;
/*
const users = [
    { id: '23', firstName: 'Bill', age: 20},
    { id: '47', firstName: 'Samantha', age: 21}
]
*/
// https://graphql.org/graphql-js/type/
const CompanyType = new GraphQLObjectType({
    name: 'Company',
    fields: {
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        description: { type: GraphQLString }
    }
});
const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: GraphQLString },
        firstName: { type: GraphQLString },
        age: { type: GraphQLInt },
        company: {
            type: CompanyType,
            resolve(parentValue, args) {
                console.log(parentValue, args);
                return axios.get(`http://localhost:3000/companies/${parentValue.companyId}`)
                    .then(response => response.data);
            }
        }
    }
});
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLString}},
            resolve(parentValue, args) {
                // return _.find(users, { id: args.id })
                return axios.get(`http://localhost:3000/users/${args.id}`)
                    .then(response => response.data);
            }
        },
        company: {
            type: CompanyType,
            args: { id: { type: GraphQLString}},
            resolve(parentValue, args) {
                // return _.find(users, { id: args.id })
                return axios.get(`http://localhost:3000/companies/${args.id}`)
                    .then(response => response.data);
            }
        }           
    }
});
module.exports = new GraphQLSchema({
    query: RootQuery
});