// Start with Express
const express=require("express");
const { log } = require("node:console");
const app=express()
// express buit by middlewar 
//middleware is funation excute with each  comming request from client

app.all("/",(req,res,next)=>{
       console.log("hello from m1");
      res.send("<h1>hello from m1</h1>")
     })
app.all("/about",(req,res)=>{
   console.log("hello from m2");
    res.send("<h1>hello from m2 About</h1>")
    })
    // if routing error return 404
    app.use((req,res)=>{
   
    res.send("<h1>page not found 404</h1>")
    })

const port=4000;
// run server
app.listen(port,()=>{

    console.log(`Server run on port ${port}  with express `);
    
})