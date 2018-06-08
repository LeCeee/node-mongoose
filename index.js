// const mongoose = require('mongoose');
// mongoose.Promise= require('bluebird');

// const Dishes = require('./models/dishes');

// const url = 'mongodb://localhost:27017/conFusion';
// const connect = mongoose.connect(url);

// connect.then((db) => {
//     console.log('Connected coorectly to the server');
//     var newDish = Dishes({
//         name: 'yumm rope',
//         description: 'izz yummy pazta'
//     });
//     newDish.save()
//     .then( (dish) => {
//         console.log(dish);
//         return Dishes.find({}).exec();
//     })
//     .then( (dishes) => {
//         console.log(dishes);

//         return db.Collection('dishes').drop();
//     })
//     .then(() => {
//         return db.close();
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// });

const mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

const Dishes = require('./models/dishes');

const url = 'mongodb://localhost:27017/conFusion';
const connect = mongoose.connect(url);



connect.then((db) => {
    var db = mongoose.connection;
    console.log('Connected correctly to server');
     
    var newDish = Dishes({
        name: 'Uthappam',
        description: 'test'
    });

    newDish.save()
        .then((dish) => {
            console.log(dish);

            return Dishes.find({}).exec();
        })
        .then((dishes) => {
            console.log(dishes);

            return db.collection('dishes').drop();
        })
        .then(() => {
            return db.close();
        })
        .catch((err) => {
            console.log(err);
        });

});