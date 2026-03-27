// Start with Express
const express=require("express");
const app=express()

const port=4000;
// run server
app.listen(port,()=>{

    console.log(`Server run on port ${port}  with express `);
    
})