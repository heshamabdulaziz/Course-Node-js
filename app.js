
// Create events in Node js
// cor modules
const eventEmitter=require("events");
let myEmitter=new eventEmitter()
 //create evente&listen
 myEmitter.on("printName",(name)=>{

console.log("your Name :  "+name); }


)

// call printName event  using  fun emit(evantName)

 myEmitter.emit("printName","Hesham Abdulaziz");
