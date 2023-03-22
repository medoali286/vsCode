const mongosse=require('mongoose');



let usersSchema=mongosse.Schema({
    name:String,
    age:Number
});
let productSchema=mongosse.Schema({
    product_name:String,
    price:Number,
    discription:String
});


let User= mongosse.model('user',usersSchema);
let product= mongosse.model('product',productSchema);
mongosse.connect('mongodb://localhost:27017/second',(err)=>{
    console.log('connected');

User.find((e,r)=>{
    console.log(r[16].name);
})
   
});
