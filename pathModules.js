
const path=require("path");
const { basename } = require("path");
const filePath=path.join("./contet","filesFolder","test.text");
console.log(path.sep); // print / or \ depen on operting system
console.log(filePath); // 
console.log(path.basename(filePath)); // return my file name
console.log(path.dirname(filePath)); // 
console.log(path.extname(filePath)); // 