// Start with Express
const express=require("express");
const { log } = require("node:console");
const app=express()
// express buit by middlewar 
//middleware is funation excute with each  comming request from client

app.use((req,res,next)=>{

   // res.send("<h1>hello from m1</h1>")
       console.log("hello from m1");
       next()
     
})
app.use((req,res)=>{
   console.log("hello from m2");
    res.send("<h1>hello from m2</h1>")
    
})

const port=4000;
// run server
app.listen(port,()=>{

    console.log(`Server run on port ${port}  with express `);
    
})