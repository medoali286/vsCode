const cardModel = require('../models/card.model');
const validathionResult = require('express-validator').validationResult;


exports.getCard = (req, res, next) => {

    cardModel.getItemsBuyUser(req.session.userId)
        .then((items) => {

            res.render('card', { items: items, isUser: true });
        }).catch(err => console.log(err));


}



exports.postCard = (req, res, next) => {
    if (validathionResult(req).isEmpty()) {

        cardModel.addnewItem({
            name: req.body.name,
            price: req.body.price,
            amount: req.body.amount,
            productId: req.body.productId,
            userId: req.session.userId,
            timestamp: Date.now(),
        }).then(() => {

            res.redirect('/card',)
        }).catch((err) => { console.log(err); });

    } else {

        req.flash('validationErrors', validathionResult(req).array());
        res.redirect(req.body.redirectTo);

    }



}


exports.postSave = (req, res, next) => {
    if (validathionResult(req).isEmpty) {
      
        cardModel.editItem(req.body.cardId,{amount:req.body.amount,timestamp:Date.now()})
        .then(()=>{
            res.redirect('/card')
        })
        .catch(err=>console.log(err));




    } else {
        req.flash('validationErrors', validathionResult(req).array());
        res.redirect('/card');
    }



}



exports.postDelete=(req,res,next)=>{

cardModel.deleteItem(req.body.cardId).then(()=>{

res.redirect('/card');
}).catch((err)=>{console.log(err)})


}