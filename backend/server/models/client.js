var mongoose = require('mongoose');

var ClientSchema = new mongoose.Schema({
    first_name: {type: String, required: true, minlength: 2 },
    last_name: {type: String, required: true, minlength: 2 },
    email : {type: String, required: false, minlength: 2, unique: true},
    phone : {type: String, required: true, minlength: 10, unique: true},
}, { timestamps: true })

mongoose.model('Client', ClientSchema);