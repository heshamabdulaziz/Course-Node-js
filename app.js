// Start with Express
const express=require("express");
const app=express()
const aboutRouter=require("./routing/aboutRouter")
const bodyparser=require("body-parser")

const bodypars=bodyparser.urlencoded({extended:true})
//app.use(express.json()) we use it if data was json
//app.use(express.json()); use for json data
//body-parser use to get form data

app.get("/",(req,res)=>{
    res.setHeader('Content-Type', 'text/html');

       res.write('<form action="/" method="post">')
       res.write('<input type="text"  name="userName" placeholder="Enter your name "/>')
       res.write('<input type="number" name="age" placeholder="Enter your age "/>')
      res.write('<input type="submit">') 
     res.write('</form>')
      res.end();
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