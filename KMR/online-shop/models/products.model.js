 const mongoose=require('mongoose');

 const DB_URL='mongodb://localhost:27017/online-shop';
 
const productSchema=mongoose.Schema({
    name:String,
    image:String,
    price:Number,
    description:String,
    category:String
});

 const product=mongoose.model('product',productSchema);

 //------------------------------------------------------

 exports.getAllProducts=()=>{


return new Promise((resolve ,reject)=>{

    mongoose.connect(DB_URL).then(()=>{
        return product.find({});
    }).then(products=>{
                
                mongoose.disconnect();
                resolve(products);
            }).catch(err=>reject(err));
});

 };
//---------------------------------------------------------

 exports.getAllProductsByCategory=(category)=>{


    return new Promise((resolve ,reject)=>{
    
        mongoose.connect(DB_URL).then(()=>{
            return product.find({category:category});
        }).then(products=>{
                    
                    mongoose.disconnect();
                    resolve(products);
                }).catch(err=>reject(err));
     });
     };

//---------------------------------------------------

 exports.getProductById=id=>{
return new Promise((resolve,reject)=>{

mongoose
.connect(DB_URL)
.then(()=>{
    return product.findById(id);
}).then(product=>{
    mongoose.disconnect();
    resolve(product)
    console.log("----------"+product);
}).catch( err => reject(err))

});

}

//--------------------------------------------


exports.getFirestProduct=()=>{
return new Promise((resolve,reject)=>{
mongoose
.connect(DB_URL)
.then(()=>{
    return product.findOne({});
}).then((product)=>{
    mongoose.disconnect();
    resolve(product);
}).catch(err=>reject(err));



});


}