var bcrypt = require("bcrypt")
const mongoose = require('mongoose')
var Staff = mongoose.model('Staff')


// All necessary requires, such as the Quote model.
module.exports = {
    /**
     * get all  staffs
     * @param {*} req 
     * @param {*} res 
     */
    getAll: function (req, res) {
        Staff.find({}, function (err, staffs) {
            if (err)
                res.json({ message: "Error", error: err })
            else
                res.json({
                    message: "Success",
                    title: "All Staffs",
                    data: staffs
                })
        })
    },

    /**
     * get all staffs below level and current 
     * @param {*} req 
     * @param {*} res 
     */
    getBelowStaffs: function (req, res) {
        Staff.find({ _id: req.params.id }, function (err, curr_staff) {
            if (err)
                res.json({ message: "Error", error: err })
            else {
                Staff.find({ user_type: { $gt: curr_staff[0].user_type } }, function (err, staffs) {
                    if (err)
                        res.json({ message: "Error", error: err })
                    else
                        res.json({
                            message: "Success",
                            title: "All Staffs",
                            data: curr_staff.concat(staffs),
                        })
                })
            }
        })
    },

    /**
     * create a new staff *below* level
     * @param {*} req 
     * @param {*} res 
     */
    create: function (req, res) {
        Staff.find({ _id: req.params.id }, function (err, curr_staff) {
            if (err)
                res.json({ message: "Error", error: err })
            else {
                if (parseInt(curr_staff[0].user_type) >= req.body.user_type) {
                    res.json({ message: "Error", error: "Access Level Denied" })
                    return
                }

                bcrypt.hash(req.body.password, 10)
                    .then(hashed_password => {
                        var staff = new Staff({
                            first_name: req.body.first_name,
                            last_name: req.body.last_name,
                            user_type: req.body.user_type,
                            user_name: req.body.user_name,
                            password: hashed_password,
                            email: req.body.email,
                            phone: req.body.phone
                        })

                        staff.save(function (err) {
                            if (err)
                                res.json({ message: "Error", error: err })
                            else
                                res.json({
                                    message: "Success",
                                    title: "New Staff Created",
                                })
                        });
                    })
                    .catch(error => {
                        res.json({ message: "Error", error: error })
                    });
            }
        })
    },


    /**
     * update staff
     * @param {*} req 
     * @param {*} res 
     */
    update: function (req, res) {
        Staff.update({ _id: req.body.id }, {
            $set: {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                user_name: req.body.user_name,
                password: req.body.password,
                email: req.body.email,
                phone: req.body.phone
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
     * delete staff
     * @param {*} req 
     * @param {*} res 
     */
    delete: function (req, res) {
        Staff.find({ _id: req.params.user_id }, function (err, curr_staff) {
            if (err)
                res.json({ message: "Error", error: err })
            else {
                if (parseInt(curr_staff[0].user_type) >= req.body.user_type) {
                    res.json({ message: "Error", error: "Access Level Denied" })
                    return
                }

                Staff.remove({ _id: req.body.id }, function (err) {
                    if (err)
                        res.json({ message: "Error", error: err })
                    else
                        res.json({
                            message: "Success",
                            title: "User Types Deleted",
                        })
                })
            }

        })
    },

    /**
     * 
     * @param {*} req 
     * @param {*} res 
     */
    logIn: function (req, res) {
        Staff.find({ _id: req.body.id }, function (err, curr_staff) {
            if (err)
                res.json({ message: "Error", error: err })
            else {
                bcrypt.compare(req.body.password, curr_staff[0].password)
                    .then(result => {
                        res.json({
                            message: "Success",
                            title: "Log In",
                            data: result
                        })
                    })
                    .catch(error => {
                        res.json({ message: "Error", error: error })
                    })
            }
        })
    }
};
