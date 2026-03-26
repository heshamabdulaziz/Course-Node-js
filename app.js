const { log } = require("console")
const http=require("http")
// this built in module use to creat server 
// server is program install in big system or computer

const server=http.createServer((req,res)=>{
// create server
res.write("<h2> hi from server");
res.write("how i can help you");
res.end()

})
const port=4000;
// run server
server.listen(port,()=>{

    console.log(`SErver run on port ${port} `);
    
})