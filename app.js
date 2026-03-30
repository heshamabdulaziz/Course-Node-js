// Start with Express
const express=require("express");
const app=express()
const aboutRouter=require("./routing/aboutRouter")
const bodyparser=require("body-parser");
// here  handle  to  json data by body persar
const bodypars=bodyparser.json({extended:true}) 
// also we can use express.json() midleware
app.get("/",(req,res)=>{
   res.json({ "name":"hesham","age":"38" });
     })
    // he we can use postman to test end points
app.post('/',bodypars,(req,res)=>{
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
app.listen(port,()=>{

    console.log(`Server run on port ${port}  with express `);
    
})