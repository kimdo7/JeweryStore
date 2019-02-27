var mongoose = require('mongoose');

// Create a Schema for Users
var StaffSchema = new mongoose.Schema({
    first_name: {type: String, required: true, minlength: 2 },
    last_name: {type: String, required: true, minlength: 2 },
    user_type : {type: Number, required: true},
    user_name : {type: String, required: true, minlength: 2, unique: true},
    password : {type: String, required: true, minlength: 2},
    email : {type: String, required: true, minlength: 2, unique: true},
    phone : {type: String, required: true, minlength: 2, unique: true},
}, { timestamps: true })

mongoose.model('Staff', StaffSchema);