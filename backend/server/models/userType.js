var mongoose = require('mongoose');

// Create a Schema for Users
var UserTypeSchema = new mongoose.Schema({
    name : {type: String, require: true, unqiue: true},
    code : {type: Number, require: true, unqiue: true}
}, { timestamps: true })

mongoose.model('UserType', UserTypeSchema);