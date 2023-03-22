const express=require("express");
const aboutRouter=require("./about-router");
const homeRouter=require("./home-router");
const notFoundPageRouter=require('./page_not_found_router');
const app=express();

app.use(homeRouter);

app.use(aboutRouter);
app.use(notFoundPageRouter);



app.listen(3000,()=>{console.log("listen to port 3000")});
