const mongoose = require('mongoose')
var UserType = mongoose.model('UserType')
var Staff = mongoose.model('Staff')

/**
 * WORK - NEED TO UPDATE CREATE & UPDATE
 * *IMPORTANT* DELEETE
 */

// All necessary requires, such as the Quote model.
module.exports = {
    /**
     * default test for all user type that sort inorder by code level
     * 
     * @param {*} req request
     * @param {*} res response
     */
    getAll: function (req, res) {
        UserType.find().sort({ code: 1 }).exec(function (err, user_types) {
            if (err)
                res.json({ message: "Error", error: err })
            else
                res.json({
                    message: "Success",
                    title: "All User Types",
                    data: user_types
                })
        })
    },

    /**
     * get all the user types >= current user (params.id)
     * sort in order
     * 
     * @param {*} req request
     * @param {*} res response
     */
    getAllByUser: function (req, res) {
        Staff.find({ _id: req.params.id }, function (err, curr_staff) {
            if (err)
                res.json({ message: "Error", error: err })
            else {
                console.log(curr_staff[0].user_type)
                UserType.find({ code: { $gte: curr_staff[0].user_type } }).sort({ code: 1 }).exec(function (err, user_types) {
                    if (err)
                        res.json({ message: "Error", error: err })
                    else
                        res.json({
                            message: "Success",
                            title: "All User Types",
                            data: user_types
                        })
                })
            }
        })
    },

    /**
     * create new user type
     * NEED TO ADD VALIADTION for lower user type
     * 
     * @param {*} req 
     * @param {*} res 
     */
    create: function (req, res) {
        var user_type = new UserType({ name: req.body.name, code: req.body.code });
        user_type.save(function (err) {
            if (err)
                res.json({ message: "Error", error: err })
            else
                res.json({
                    message: "Success",
                    title: "New User Types Created",
                })
        });
    },

    /**
     * update user type 
     * NEED - VALIADTION
     * 
     * @param {*} req 
     * @param {*} res 
     */
    update: function (req, res) {
        UserType.update({ _id: req.body.id }, {
            $set: {
                name: req.body.name,
                code: req.body.code
            }
        }, function (err) {
            if (err)
                res.json({ message: "Error", error: err })
            else
                res.json({
                    message: "Success",
                    title: "User Types Updated",
                })
        })
    },

    /**
     * delete user type
     * NEED VALIDATION
     * 
     * @param {*} req 
     * @param {*} res 
     */
    delete: function (req, res) {
        UserType.remove({ _id: req.body.id }, function (err) {
            if (err)
                res.json({ message: "Error", error: err })
            else
                res.json({
                    message: "Success",
                    title: "User Types Deleted",
                })
        })
    }
};
