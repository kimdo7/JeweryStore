var mongoose = require('mongoose');

// Create a Schema for Users
var Priceschema = new mongoose.Schema({
    sell_18k : {type: Number, required: true},
    buy_18k : {type: Number, required: true},
    change_18k : {type: Number, required: true},

    sell_24k : {type: Number, required: true},
    buy_24k : {type: Number, required: true},
    change_24k : {type: Number, required: true},
}, { timestamps: true })

mongoose.model('Price', Priceschema);