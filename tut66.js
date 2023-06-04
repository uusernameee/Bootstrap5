const http=require("http");
const fs=require("fs");
const content=fs.readFileSync("index.html");
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/html'});
    res.end(content);
})
server.listen(8000,'127.0.0.1',()=>{
    console.log(`Server running at http://127.0.0.1:8000`);
})