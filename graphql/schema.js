//import required stuff from graphql
const { GraphQLSchema,  GraphQLObjectType } = require('graphql');

//import queries
const {users} = require('./queries');

//import mutations:
const {register,login} = require('./mutations');

//define query type
const QueryType = new GraphQLObjectType({
    name: "QueryType",
    description:"Queries",
    fields:{users},

})
// define mutation type
const MutationType = new GraphQLObjectType({
    name:"MutationType",
    description:"Mutations",
    fields:{register,login},
})

module.exports= new GraphQLSchema({
    query:QueryType,
    mutation:MutationType,
});