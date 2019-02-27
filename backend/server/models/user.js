var mongoose = require('mongoose');

// Create a Schema for Users
var UserSchema = new mongoose.Schema({
    firstName: {type: String, required: true, minlength: 2 },
    lastName: {type: String, required: true, minlength: 2 },
    userType : {type: Integer, required: true},
    userName : {type: String, minlength: 2, unique: true},
    email : {type: String, minlength: 2, unique: true},

}, { timestamps: true })

mongoose.model('User', UserSchema);