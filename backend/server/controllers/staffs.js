const mongoose = require('mongoose')
var Staff = mongoose.model('Staff')

// All necessary requires, such as the Quote model.
module.exports = {
    index: function(req, res) {
    	Staff.find({}, function (err, users) {
            res.json({msg:"test1"})
        })
    },
    create: function(req, res) {
    	// code...
    },
    destroy: function(req, res) {
    	// code...
    }
};
