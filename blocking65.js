 const fs=require("fs");
 const text=fs.readFile("text.txt","utf-8",(err,data)=>{ 
    console.log(data);
 });
 console.log("msg");