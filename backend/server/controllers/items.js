const mongoose = require('mongoose')
var Price = mongoose.model("Price")
var Staff = mongoose.model('Staff')
var Category = mongoose.model('Category')
var Item = mongoose.model('Item')

module.exports = {
    /**
     * @param {*} req 
     * @param {*} res 
     * 
     * @return all the prices
     */
    get_all: function (req, res) {
        Item.find({}, function (err, items) {
            if (err)
                res.json({ message: "Error", error: err })
            else
                res.json({
                    message: "Success",
                    title: "All Staffs",
                    data: items
                })
        })
    },

    /**
     * Add item and add to the list of category
     * @param {*} req 
     * @param {*} res 
     */
    add: function (req, res) {
        Item.create(req.body, function (err, data) {
            if (err)
                res.json({ message: "Error", error: err })
            else
                Category.findOneAndUpdate({ _id: req.params.category_id }, { $push: { items: data } }, function (err, data) {
                    if (err) {
                        res.json({ message: "Error", error: err })
                    } else {
                        res.json({
                            message: "Success",
                            title: "All Staffs",
                            data: data
                        })
                    }
                })
        })
    },

    delete: function (req, res) {
        Item.remove({ _id: req.body.id }, function (err) {
            if (err)
                res.json({ message: "Error", error: err })
            else
                Category.findOneAndUpdate({ _id: req.params.category_id }, { $pull: { items: req.body } }, function (err, data) {
                    if (err)
                        res.json({ message: "Error", error: err })
                    else
                        res.json({
                            message: "Success",
                            title: "All Staffs",
                            data: data
                        })
                })
        })
    },

    /**
     * *NEED TO UPDATE* the category 
     * @param {*} req 
     * @param {*} res 
     */
    update: function (req, res) {
        Item.update({ _id: req.params.id }, {
            $set: req.body
            , function(err) {
                if (err)
                    res.json({ message: "Error", error: err })
                else
                    res.json({
                        message: "Success",
                        title: "Price Updated",
                    })
            }
        })
    }
}