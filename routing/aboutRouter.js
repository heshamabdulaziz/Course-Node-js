// express have two kind middleware 
//1- express middlewar
//2-Router middleware

const express=require("express");
const router=express.Router()

router.get("/",(req,res)=>{
   console.log("hello from m2");
    res.send("<h1>hello from middleware About router page</h1>")
    })
    
    module.exports=router