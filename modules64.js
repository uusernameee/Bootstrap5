/* READING TEXT FROM ANOTHER FILE:-
const fs=require("fs");
const text=fs.readFileSync("text.txt","utf-8");
console.log(text);

REPLACE:-  
const fs=require("fs");
let text=fs.readFileSync("text.txt","utf-8");
text=text.replace("backend","frontend");
console.log(text);*/

//WRITE TEXT IN ANOTHER FILE:-
const fs=require("fs");
const text=fs.readFileSync("text.txt","utf-8");
fs.writeFileSync("create.txt",text);