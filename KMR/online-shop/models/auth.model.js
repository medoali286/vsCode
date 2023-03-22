const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const DB_URL = "mongodb://localhost:27017/online-shop";


const userShcema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
});

const User = mongoose.model('user', userShcema);

//------------------createNewUser---------------------------

exports.createNewUser = (username, email, password) => {

    return new Promise((resolve, reject) => {

        mongoose
            .connect(DB_URL)
            .then(() => {
                return User.findOne({ email: email });
            }).then((user) => {
                if (user) {
                    mongoose.disconnect();
                    reject("email is used");
                }
                else {
                    return bcrypt.hash(password, 10).then((hashPassword) => {
                        let user = new User({
                            username: username,
                            email: email,
                            password: hashPassword
                        });

                        return user.save();

                    }).then(() => {
                        mongoose.disconnect();
                        resolve();
                    }).catch(err => {
                        mongoose.disconnect();
                        reject(err)
                    });

                }


            })


    });

};

//-----------------------------login--------------------------------


exports.login = (email, password) => {

   return new Promise((resolve,reject)=>{
    mongoose.connect(DB_URL)
    .then(() => {return User.findOne({ email: email }) })
    .then((user) => {
        if (!user) { mongoose.disconnect(); reject("there is no user matches this email"); }
        else {
            bcrypt.compare(password, user.password,)
            .then((same) => {
                if (!same) { mongoose.disconnect(); reject('password is incorrect'); }
                else {
                    mongoose.disconnect(); resolve(user.id);
                }
            })
        }
    }).catch(err=>{mongoose.disconnect(); reject(err);});




   })

};


