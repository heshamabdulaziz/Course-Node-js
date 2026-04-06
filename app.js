
// Create events in Node js
// cor modules
const eventEmitter=require("events");
let myEmitter=new eventEmitter()
 //create evente&listen
 myEmitter.on("printName",()=>{

console.log("your Name :  hesham"); }


)

// call printName event  using  fun emit(evantName)

 myEmitter.emit("printName");
