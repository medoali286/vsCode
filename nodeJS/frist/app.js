const express=require("express");

const app=express();
app.use((req,res,next)=>{
      console.log('helow from m1');
      res.send("mohamed ali");
      next();
})
app.use((req,res,next)=>{
      console.log('helow from m2')
      next(); 
})
app.use((req,res)=>{console.log('helow from m3')})

app.listen(3000,()=>console.log("listen on port 3000"));
