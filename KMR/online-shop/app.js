const express=require('express');
const path =require('path');
const session=require('express-session');
const SessionStore=require('connect-mongodb-session')(session);
const flash=require('connect-flash');



const homeRouter=require('./routes/home.route');
const productRouter=require('./routes/product.route');
const authRouter=require('./routes/auth.router');
const cardRouter=require('./routes/card.router');


const app=express();

app.use(express.static(path.join(__dirname,"assets")));
app.use(express.static(path.join(__dirname,'images')));

app.use(flash());




const STORE=new SessionStore({
    uri:'mongodb://localhost:27017/online-shop',
    collection: 'sessions'
});

app.use(session({
    secret:'this is my secret hash express sessions',
    saveUninitialized:false,
    cookie:{maxAge :1*60*60*1000},
 resave:true,
    store:STORE,
}));


app.set('view engine','ejs');
app.set('views','views');

app.use('/',homeRouter); 
app.use('/',authRouter);
app.use(productRouter);
app.use('/card',cardRouter);

app.get('/',(req,res,next)=>{

 res.render('index');

})

app.listen(3000,(err)=>{
    console.log(err);
    console.log("listen to port 3000");});