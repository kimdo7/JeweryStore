var mongoose = require('mongoose');

// Create a Schema for Users
var UserTypeSchema = new mongoose.Schema({
    name : {type: String, require: true, minlength: 2, index: { unique: true }},
    code : {type: String,  require: true, index: { unique: true }}
}, { timestamps: true, upsert:true})

mongoose.model('UserType', UserTypeSchema);
