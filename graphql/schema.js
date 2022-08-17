//import required stuff from graphql
const { GraphQLSchema,  GraphQLObjectType } = require('graphql');

//import queries
const {} = require('./queries');

//import mutations:
const {} = require('./mutations');

//define query type
const QueryType = new GraphQLObjectType({
    name: "QueryType",
    description:"Queries",
    fields:{},

})
// define mutation type
const MutationType = new GraphQLObjectType({
    name:"MutationType",
    description:"Mutations",
    fields:{},
})

module.exports= new GraphQLSchema({
    query:QueryType,
    mutation:MutationType,
});