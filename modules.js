/*
in node js there  are three typs of modules 
1-built in modules like http, fs, 
2-third party modules i from NPM  like express , multer, nodemon,.....,joi,bodyparser,cors,...
3- custom modules
  we use (require) to exportde date from anthor files


*/
// ways to do export
const  var1=10;
const var2=20;

const  var3=40;
const var4=55
function sum(v1,v2){
return v1+v2;

}
  multi=(v1,v2)=>v1*v2;

 module.exports={
var1,var2,var4,sum,multi

 }

 // anther way 
 module.exports.var3=44;
 