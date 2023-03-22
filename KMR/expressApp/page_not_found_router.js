const express=require('express');
const router=express.Router();


router.use((req,res)=>{

res.send('Page Not Found');

});


module.exports=router;