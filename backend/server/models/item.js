var mongoose = require('mongoose');

// Create a Schema for Users
var ItemSchema = new mongoose.Schema({
    name : {type: String, required: true, minlength: 2},
    labor: {type: Number, required: true, minlength: 2},
    weight: {type: Number, required: true, minlength: 2},
    creator: {type: String, required: true, minlength: 2},
    count: {type: Number, required: true, minlength: 2},
    commision: {type: Number, required: true, minlength: 2},
    img_src : [String],
    locations: [String]
}, { timestamps: true })

mongoose.model('Item', ItemSchema);

module.export = ItemSchema