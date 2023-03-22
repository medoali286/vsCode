const express=require('express');
const bodyParser=require('body-parser');

const app=express();

const bodyParserMW=bodyParser.urlencoded({extended:true});
app.get("/",(req,res,next)=>{
   

res.write('<form action="/" method ="POST">');
res.write('<input name="username">');
res.write('<input type="submit">');
res.write('</form>');
res.end();



});

app.post("/",bodyParserMW,(req,res,next)=>{
    console.log(req.body);
    res.send("done");
});


app.listen(3000,()=>{console.log("listen port 3000");});