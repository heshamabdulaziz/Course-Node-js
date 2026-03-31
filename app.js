// Start with Express
require("dotenv").config()
const express=require("express");
const jwt=require("jsonwebtoken")
const app=express()

// sock io doeno support express but we use http and pass express app to https server
const server=require("http").createServer(app)
const socketIo=require("socket.io");
// call socketIo as fn and give my server
const io=socketIo(server);
//  connection in server
// connect on client
// listen to any  connection 
io.on("connection",(client)=>{
console.log('New client connected');

})

const aboutRouter=require("./routing/aboutRouter")
const bodyparser=require("body-parser");
// here  handle  to  json data by body persar
const bodypars=bodyparser.json({extended:true}) 
// also we can use express.json() midleware
//const securetky="hi hesham this securetky" // have to save in dotenv
app.get("/user",(req,res)=>{
    //create token with sign(payload,secretkey,expersIn)
    //process.env.securetky
    let token=jwt.sign({"name":"hesham","age":38},process.env.SECURITKEY,{expiresIn:'1h'})
   res.json({"token":token});
     })
    // he we can use postman to test end points
app.post('/user',bodypars,(req,res)=>{
   //verify token 
   let token=req.header("Authorization");
   try {
    let data=jwt.verify(token,process.env.SECURITKEY)
    res.json(data)
   } catch (error) {
    res.json({user:false})
   }
  
res.json(req.body)

})
app.delete('/user',bodypars,(req,res)=>{
    const {userName,age}=req.body;
res.json(req.body)

})
// aboutRouter
app.use("/about",aboutRouter);

// if routing error return 404 handle error 
 app.use((req,res)=>{
   
    res.send("<h1>page not found 404</h1>")
    })

const port=4000;
// run server
server.listen(port,()=>{

    console.log(`Server run on port ${port}  with express `);
    
})