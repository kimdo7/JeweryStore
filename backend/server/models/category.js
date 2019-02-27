var mongoose = require('mongoose');
var ItemSchema = require("./item.js")

var Categorychema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2 },
    items: [ItemSchema]
}, { timestamps: true })

mongoose.model('Category', Categorychema);