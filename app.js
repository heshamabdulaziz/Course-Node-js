
const express=require("express");
const path=require("path")
const app=express()

// socket io does not support express but we use http and pass express app to https server
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

app.get("/",(req,res)=>{
  
   res.sendFile(path.join(__dirname,"index.html"));
     })

const port=4000;
// run server
server.listen(port,()=>{

    console.log(`Server run on port ${port}  with express `);
    
})