const mongoose = require('mongoose')
User = mongoose.model('User')

// All necessary requires, such as the Quote model.
module.exports = {
    index: function(req, res) {
    	User.find({}, function (err, users) {
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
