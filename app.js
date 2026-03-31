
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
io.on("connection",socket=>{
console.log('New client connected');
// listen 
socket.on("clientEmit",(data)=>{
    console.log("event and data recieved"+"    ", data);

     //socket.emit("serverEvent");
     //io.emit("serverEvent");

     socket.broadcast.emit("serverEvent");
    /* there three ways to make emit from server to client 
    1-socket  .emit() make emit just to currently client
    2- io.emit() make emit to  clients
    3-socket .broadcast.emit() make emit to  clients excpt currently client
    
    
    */
    
    
});

//
})

app.get("/",(req,res)=>{
  
   res.sendFile(path.join(__dirname,"index.html"));
     })

const port=4000;
// run server
server.listen(port,()=>{

    console.log(`Server run on port ${port}  with express `);
    
})