const{readFileSync,writeFileSync}=require("fs");

const file_1=readFileSync("./test1.txt","utf-8");
const  file_2=readFileSync("./test2.txt","utf-8");

console.log(file_1,"\n",file_2)
// write to files 

const writee=writeFileSync("./test3.txt",file_1)
console.log("%%%%%%  Read the Content from test3  %%%%%%%%%")

console.log(readFileSync("./test3.txt","utf-8"))
console.log("%%%%%%  Read the Content after append  %%%%%%%%%")
const appendContent=writeFileSync("./test3.txt",file_2,{flag:"a"})
console.log(readFileSync("./test3.txt","utf-8"))