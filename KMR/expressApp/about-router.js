const express=require("express");

const router=express.Router();

router.get('/about',(req,res,next)=>{
res.send("about page");

});


module.exports=router;