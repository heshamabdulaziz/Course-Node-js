
// Create events in Node js
// cor modules
const eventEmitter=require("events");
console.log("*******   Events modules   ****************");

let myEmitter=new eventEmitter()
 //create evente&listen
 myEmitter.on("printName",(name)=>{

console.log("your Name :  "+name); }


)

// call printName event  using  fun emit(evantName)

 myEmitter.emit("printName","Hesham Abdulaziz");

 
console.log("*******   OS modules   ****************");
// os modules 

 require("./osModules")