// Start with Express
const express=require("express");
const path=require("path")
const app=express()
app.use(express.static(path.join(__dirname,'static')))
// to access to serve files like css or js we use express.static() middleware
const aboutRouter=require("./routing/aboutRouter")
const bodyparser=require("body-parser")

const bodypars=bodyparser.urlencoded({extended:true})
app.get("/",(req,res)=>{

res.sendFile(path.join(__dirname,'views','index.html')) 
     })
    
app.post('/',bodypars,(req,res)=>{
    const {userName,age}=req.body;
    console.log(userName,age);
    res.send("DONE")
    



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