const express = require("express");
const dotenv= require("dotenv");
const {graphqlHTTP} = require('express-graphql');
const schema = require('./graphql/schema')

const {connectDB} = require("./db")
const app = express();

dotenv.config();
connectDB();
app.get("/",(req,res)=>{
    res.json({msg: "Welcome! to graphql"});    
});

app.use("/graphql",graphqlHTTP({
    schema:schema,
    graphiql:true,

}))

app.listen(process.env.PORT,()=>{
    console.log(`App running on port ${process.env.PORT} `);
});