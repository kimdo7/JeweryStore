var mongoose = require('mongoose');
var TransactionDetailSchema = require("./transactionDetail.js")

var CommissionSchema = new mongoose.Schema({
    seller_id : {type : String, required: true},
    seller_name: {type: String, required: true},
    transaction_id : {type : String, required: true},
    total: {type: String, required: true}

}, { timestamps: true, upsert:true})

mongoose.model('Commision', CommissionSchema);
