const express=require("express");
const path=require("path");//for pug
const app=express();
const port=80;
app.use('/static',express.static('static'));
//set the template engine as pug
app.set('view engine','pug');
//set views directory
app.set('views',path.join(__dirname,'views'));//views==template
//our pug endpoint
app.get('/demo', (req, res) => {
   res.status(200).render('demo', { title: 'Hey', message: 'Hello there!' })
})
app.get("/",(req,res)=>{
    res.send("This is main page.")
});
app.get("/about",(req,res)=>{
    res.send("This is about page.")
});
app.get("/this",(req,res)=>{
    res.status(404).send("error")
});
app.post("/about",(req,res)=>{
    res.send("This is a post about page.");
})
app.listen(port,()=>{
    console.log("Server running at http://127.0.0.1:80");
});