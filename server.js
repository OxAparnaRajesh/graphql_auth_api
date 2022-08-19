const express = require("express");
const dotenv= require("dotenv");
const {graphqlHTTP} = require('express-graphql');
const schema = require('./graphql/schema')

const {connectDB} = require("./db")
const app = express();

dotenv.config();

//const {createJwtToken}= require("./util/auth")
//const{authenticate} = require("./middleware/auth")
connectDB();

//app.use(authenticate)

app.get("/",(req,res)=>{
    console.log(req)
    //console.log(req.verifiedUser);
    res.json({msg: "Welcome! to graphql"});    
});

// app.get('/authtest',(req,res) =>{
//     res.json(
//         createJwtToken({
//             username:'raj',
//             email:'haitu@gmail.com',
//             displayName:'Beem'
//         })
//     );
// })

app.use("/graphql",graphqlHTTP({
    schema:schema,
    graphiql:true,

}))

app.listen(process.env.PORT,()=>{
    console.log(`App running on port ${process.env.PORT} `);
});