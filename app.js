require('dotenv').config()
require("./database/database").connect()
const express=require("express");
const app=express();


app.use(express.json());


app.get('/',(req,res)=>{
   res.send("<h1>Server is working</h1>");
})

app.post("/register",async(req,res)=>{
   try {
      //get data from body
      //all data should exist
      //check if user already exist
      //encrypt the password
      //save the user in db
      //generate a token for user and send it

      

   } catch (error) {
      console.log(error)
   }


})

module.exports=app;
