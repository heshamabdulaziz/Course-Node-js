// Start with Express
const express=require("express");
const path=require("path")
const app=express()
// settigng   Template Engines ejs
app.set("view engine","ejs")//ejs engine
app.set("views","view")// path of my files
app.use(express.static(path.join(__dirname,'statics')))
// to access to serve files like css or js we use express.static() middleware
const aboutRouter=require("./routing/aboutRouter")
const bodyparser=require("body-parser");


const bodypars=bodyparser.urlencoded({extended:true})
app.get("/",(req,res)=>{

res.render('index',{pagetitle:'Home'})
     })
//here name&age params
app.get("/:name/:age",(req,res)=>{
    // extract params
    const {name,age}=req.params;

 res.render('index',{userName:name,Age:age,pagetitle:'Home'})
    
     })
    
app.post('/',bodypars,(req,res)=>{
    const {userName,age}=req.body;
    console.log(userName,age);
    //res.send("DONE")
    res.render('index',{userName:req.body.userName,Age:age,pagetitle:'Home'})
    



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