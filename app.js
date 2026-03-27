// Start with Express
const express=require("express");
const { log } = require("node:console");
const app=express()
// express buit by middlewar 
//middleware is funation excute with each  comming request from client

app.use((req,res,next)=>{
       console.log("hello from m1");
       next()//go to next m2
     
  },(req,res,next)=>{
   console.log("hello from m2");
    //res.send("<h1>hello from m2</h1>")
   next()//go to next m3
}
)
app.use((req,res)=>{
   console.log("hello from m3");
    res.send("<h1>hello from m3</h1>")
    
})

const port=4000;
// run server
app.listen(port,()=>{

    console.log(`Server run on port ${port}  with express `);
    
})