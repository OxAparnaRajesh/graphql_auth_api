//import required stuff from graphql
const { GraphQLSchema,  GraphQLObjectType } = require('graphql');

//import queries
const {users,user,posts,post} = require('./queries');

//import mutations:
const {register,login,addPost} = require('./mutations');

//define query type
const QueryType = new GraphQLObjectType({
    name: "QueryType",
    description:"Queries",
    fields:{users,user,posts,post},

})
// define mutation type
const MutationType = new GraphQLObjectType({
    name:"MutationType",
    description:"Mutations",
    fields:{register,login,addPost},
})

module.exports= new GraphQLSchema({
    query:QueryType,
    mutation:MutationType,
});