// Start with Express
const express=require("express");
const path=require("path")
const app=express()
const aboutRouter=require("./routing/aboutRouter")
const bodyparser=require("body-parser")

const bodypars=bodyparser.urlencoded({extended:true})
//app.use(express.json()) we use it if data was json
//app.use(express.json()); use for json data
//body-parser use to get form data
// anthor way to send html file to browser
 //- sendfile()and use core  path module  to access my file path  
 //path.join this property talk many path and join it togther depend on  system (linux or windos ,or 
 // for exmpe in widow "\..\..\" but in linux "/.../...")
  // __direname return my project path 

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