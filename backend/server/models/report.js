var mongoose = require('mongoose');

// Create a Schema for Users
var ReportSchema = new mongoose.Schema({
    title : {type: String, required: true, minlength: 2},
    src : {type: String, required: true, minlength: 2},
}, { timestamps: true, upsert:true})

mongoose.model('Report', ReportSchema);
