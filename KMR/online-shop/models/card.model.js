const mongoose = require('mongoose');

const DB_URL = 'mongodb://localhost:27017/online-shop';


const cardSchema = mongoose.Schema({
    name: String,
    price: Number,
    amount: Number,
    userId: String,
    productId: String,
    timestamp: Number
});


const cardItem = mongoose.model('card', cardSchema);


exports.addnewItem = data => {

    return new Promise((resolve, reject) => {

        mongoose
            .connect(DB_URL)
            .then(() => {
                let item = new cardItem(data);
                return item.save();
            }).then(() => {
                mongoose.disconnect();
                resolve();
            }).catch(err => {
                mongoose.disconnect();
                reject(err);
            })
    });

}


//---------------------------------------------


exports.getItemsBuyUser = (userId) => {

    return new Promise((resolve, reject) => {

        mongoose
            .connect(DB_URL)
            .then(() => {
              return  cardItem.find({userId:userId},{},{sort:{timestamp:-1}});
            })
            .then((items) => {
                
                mongoose.disconnect();
                resolve(items);
            })
            .catch((err) => {
                mongoose.disconnect();
                reject(err);
            });
     });





}

//---------------------------------------------------------------


exports.editItem=(id,newData)=>{

return new Promise((resolve,reject)=>{

mongoose.connect(DB_URL)
.then(()=>{
return cardItem.updateOne({_id:id},newData);


})
.then((items)=>{
    mongoose.disconnect();
   
    resolve(items);
})
.catch(err=>{
    mongoose.disconnect();
    reject(err);
})



});



}

//------------------------------------------------------------------------------------

exports.deleteItem=(id)=>{
return new Promise((resolve,reject)=>{

mongoose.connect(DB_URL)
.then(()=>{

return cardItem.findByIdAndDelete(id)

}).then(()=>{

    mongoose.disconnect();
    resolve();

}).catch((err)=>{
    console.log(err)});


})





}