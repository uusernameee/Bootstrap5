const http=require("http");
const fs=require("fs");
const index=fs.readFileSync("index.html");
const hometext=fs.readFileSync("tut67/home.html");
const abouttext=fs.readFileSync("tut67/about.html");
const contacttext=fs.readFileSync("tut67/contact.html");
const server=http.createServer((req,res)=>{
    const statusCode=200;
    res.setHeader('Content-type','text/html');
    url=req.url;
    if(url=='/')
    res.end(hometext);
    else if(url=='/about')
    res.end(abouttext);
    else if(url=='/contact')
    res.end(contacttext);
    else{
       res.statusCode=404;
    res.end("<h1>404 not found</h1>");
    }
});
server.listen(80,'127.0.0.1',()=>{
    console.log(`http://127.0.0.1/80`);
});