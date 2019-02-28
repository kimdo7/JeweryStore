var mongoose = require('mongoose');
var TransactionDetailSchema = require("./transactionDetail.js")

// Create a Schema for Users
var TransactionSchema = new mongoose.Schema({
    client_id : {type: String, required: true},
    client_name : {type: String, required: true},
    seller_id : {type: String, required: true},
    seller_name : {type: String, required: true},
    count : {type: Number, required: true},
    total : {type: Number, required: true},
    items : [TransactionDetailSchema]
}, { timestamps: true, upsert:true})

mongoose.model('Transaction', TransactionSchema);
