var mongoose = require('mongoose');

// Create a Schema for Users
var TransactionDetailSchema = new mongoose.Schema({
    item_id : {type: String, required: true},
    item_name : {type: String, required: true},
    count : {type: Number, required: true},
    price : {type: Number, required: true},
}, { timestamps: true })

mongoose.model('TransactionDetail', TransactionDetailSchema)

module.exports = TransactionDetailSchema
