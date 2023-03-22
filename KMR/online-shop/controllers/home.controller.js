const productsModel=require('../models/products.model');


exports.getHome=(req,res,next)=>{

let category=req.query.category;
let validCategories=["clothes","phones","computers","test"];
let productPromise;

if(category&&validCategories.includes(category)){

productPromise=productsModel.getAllProductsByCategory(category);

}else{
    productPromise=productsModel.getAllProducts();
   }

productPromise.then(products=>{

res.render('index',{

products:products,
isUser:req.session.userId,
validationError:req.flash('validationErrors')[0]

});



});

    
};