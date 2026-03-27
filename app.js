// Start with Express
const express=require("express");
const app=express()
const aboutRouter=require("./routing/aboutRouter")
// express buit by middlewar 
//middleware is funation excute with each  comming request from client
// all requst methods GET,POST,PUT ,DELETE ,PATCH IN express

app.get("/",(req,res,next)=>{
       console.log("hello from m1");
      res.send("<h1>hello from m1</h1>")
     })

// aboutRouter
app.use("/about",aboutRouter);

    // if routing error return 404 handle error 
    app.use((req,res)=>{
   
    res.send("<h1>page not found 404</h1>")
    })

const port=4000;
// run server
app.listen(port,()=>{

    console.log(`Server run on port ${port}  with express `);
    
})