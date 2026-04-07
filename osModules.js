const os=require("os");
console.log(os.userInfo());
console.log(os.uptime());
console.log("Name    : ",os.type());
console.log("release   : ",os.release());
console.log("memory    : ",os.totalmem());
console.log("free space    : ",os.freemem());
