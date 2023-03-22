const authModel = require('../models/auth.model');
const validationResult = require('express-validator').validationResult;

//-------------------------Get Signup-------------------------------
exports.getSignup = (req, res, next) => {
    res.render('signup', {
        authError: req.flash('authError')[0],
        validationErrors: req.flash("validationErrors"),
        isUser:req.session.userId,
    });
}

//--------------------------Post Signup-------------------------------

exports.postSignup = (req, res, next) => {

    console.log(validationResult(req).array());

    if (validationResult(req).isEmpty()) {

        authModel.createNewUser(req.body.username, req.body.email, req.body.password).then(() => {
            res.redirect('/login')
        }).catch(err => res.redirect('/signup'))

    } else {

        req.flash("validationErrors", validationResult(req).array());
        res.redirect("/signup");

    }
}
    //----------------------------Get Login-------------------------------


    exports.getLogin = (req, res, next) => {


        res.render('login', {
             authError: req.flash("authError")[0],
            validationErrors:req.flash("validationErrors"),
            isUser:req.session.userId,
            });

    }
    //---------------------------Post Login--------------------------------

    exports.postLogin = (req, res, next) => {
       if(validationResult(req).isEmpty()){

        authModel.login(req.body.email, req.body.password)
        .then((id) => {
            console.log(id);
            req.session.userId = id;
            res.redirect('/');
        })
        .catch(err => {
            console.log(err);
            req.flash("authError", err);
            res.redirect('/login');

        });

       }else{

        req.flash("validationErrors",validationResult(req).array());
        res.redirect('/login');


       }
    }

    //------------------------------LogOut-------------------------------


    exports.logout = (req, res, next) => {

        req.session.destroy(() => {

            res.redirect('/');
        });


    }
