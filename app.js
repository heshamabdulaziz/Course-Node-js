const { log } = require("console")
const http=require("http")
// this built in module use to creat server 
// server is program install in big system or computer

const server=http.createServer((req,res)=>{
// create server
res.setHeader("Content-Type","text/html")

res.statusCode=200
// 200 ok 
//404  not found
const header=req.headers;
res.write("<h2> hi from server</h2>");
res.write("<h2>how i can help you\n");

res.end()

})
const port=4000;
// run server
server.listen(port,()=>{

    console.log(`SErver run on port ${port} `);
    
})