const { GraphQLList, GraphQLID } = require('graphql');
const {UserType,PostType}= require('./types');
const { User,Post }=require('../models');

const users ={
    type: new GraphQLList(UserType),
    description:"Retrives List of users ",
    resolve(parent,args){
        return User.find()
    }

}
const user ={
    type: UserType,
    description:"Retrives one user ",
    args:{id:{type:GraphQLID}},
    resolve(parent,args){
        return User.findById(args.id)
    }
}

const posts ={
    type : new GraphQLList(PostType),
    description:"Retrieves list of Posts",
    resolve(){
        return Post.find();
    }
}

const post ={
    type:PostType,
    description:"Retrieves one post",
    args:{id:{type:GraphQLID}},
    resolve(parent,args){
        return Post.findById(args.id);
    }
}

module.exports ={users,user,posts,post};