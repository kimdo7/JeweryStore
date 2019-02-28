var bcrypt = require("bcrypt")
const mongoose = require('mongoose')
var Category = mongoose.model('Category')

module.exports = {
    /**
     * 
     * @param {*} req 
     * @param {*} res 
     * @return all categories
     */
    getAll: function (req, res) {
        Category.find({}, function (err, categories) {
            if (err)
                res.json({ message: "Error", error: err })
            else
                res.json({
                    message: "Success",
                    title: "All Categories",
                    data: categories
                })
        })
    },

    /**
     * add new category
     * @param {*} req 
     * @param {*} res 
     */
    add: function (req, res) {
        var category = new Category({
            name: req.body.name
        })

        category.save(function (err) {
            if (err)
                res.json({ message: "Error", error: err })
            else
                res.json({
                    message: "Success",
                    title: "New Category Created",
                })
        });
    },

    /**
     * Update the name
     * @param {*} req 
     * @param {*} res 
     */
    update: function (req, res) {
        Category.update({ _id: req.body.id }, {
            $set: {
                name: req.body.name
            }, function(err) {
                if (err)
                    res.json({ message: "Error", error: err })
                else
                    res.json({
                        message: "Success",
                        title: "Category Name Updated",
                    })
            }
        })
    },

    /**
     * *validation* size != 0
     * @param {*} req 
     * @param {*} res 
     */
    delete: function (req, res) {
        Category.find({ _id: req.params.id }, function (err, categories) {
            if (err)
                res.json({ message: "Error", error: err })
            else if (categories[0].items.length !== 0)
                res.json({ message: "Error", error: "Category is not empty" })
            else
                Category.remove({ _id: req.params.id }, function (err) {
                    if (err)
                        res.json({ message: "Error", error: err })
                    else
                        res.json({
                            message: "Success",
                            title: "Category Deleted",
                        })
                })
        })
    }
}