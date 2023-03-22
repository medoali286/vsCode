const express=require('express');
const MongoClient  = require('mongodb').MongoClient;
const ObjectId=require('mongodb').ObjectId;


app=express();
// MongoClient.connect("mongodb://localhost:27017/firestDB",(err,client)=>{
//     console.log('mongo connected');
//     const db=client.db();

//     db.collection('users').insertMany([{
//             name:'ahmed',
//             age:23
//     },{
//         name:'omar',
//         age:22

//     },{
//         name:'samy',
//         age:21

//     },{
//         name:'samr',
//         age:27
//     }]).then(()=>{console.log('data inserted');

//     client.close().then((res)=>{
//         console.log('closed');
//     });

// });
    
       
// });


MongoClient.connect("mongodb://localhost:27017/firestDB",(err,client)=>{
console.log('mongo connected');
const db=client.db();

db.collection('users').updateMany(
    {age:23},{$set:{adress:2000}}



);


});




MongoClient.connect("mongodb://localhost:27017/firestDB",(err,client)=>{
    console.log('mongo connected');
    const db=client.db();

    db.collection('users').find({}).toArray().then(data=>console.log(data));
    
       
});


app.get('/',(req,res,next)=>{

res.send('hi');


});


app.listen(3000,()=>{console.log('listen to port 3000');});