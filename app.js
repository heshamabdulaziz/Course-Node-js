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
//400 eeror
//500
// req.url return endpoint
//req.method return method( get or post or put or delete)
if(req.url==="/"){
res.write(`<h2> Home page  AND Metod :  ${req.method}</h2>`);}

if(req.url==="/about"){
res.write(`<h2> About page  AND Metod :  ${req.method}</h2>`);}

res.end()

})
const port=4000;
// run server
server.listen(port,()=>{

    console.log(`SErver run on port ${port} `);
    
})