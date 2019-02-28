const mongoose = require('mongoose')
var Price = mongoose.model("Price")
var Staff = mongoose.model('Staff')

module.exports = {
    /**
     * @param {*} req 
     * @param {*} res 
     * 
     * @return all the prices
     */
    all_prices: function (req, res) {
        Price.find({}, function (err, prices) {
            if (err)
                res.json({ message: "Error", error: err })
            else
                res.json({
                    message: "Success",
                    title: "All Staffs",
                    data: prices
                })
        })
    },

    /**
     * *NEED to fix* better querry 
     * 
     * @param {*} req 
     * @param {*} res 
     * @return the last price
     */
    current_price: function (req, res) {
        Price.find({}, function (err, prices) {
            if (err)
                res.json({ message: "Error", error: err })
            else
                res.json({
                    message: "Success",
                    title: "All Staffs",
                    data: prices[prices.length - 1]
                })
        })
    },

    /**
     * update the last price
     * @param {*} req 
     * @param {*} res 
     */
    update: function (req, res) {
        Price.find({}, function (err, prices) {
            if (err)
                res.json({ message: "Error", error: err })
            else{
                if (prices[prices.length - 1]._id != req.params.id ){
                    res.json({ message: "Error", error: "You only allow to update the last price" })
                    return
                }

                Price.update({ _id: req.params.id }, {
                    $set: {
                        sell_18k: req.body.sell_18k,
                        buy_18k: req.body.buy_18k,
                        change_18k: req.body.change_18k,
        
                        sell_24k: req.body.sell_24k,
                        buy_24k: req.body.buy_24k,
                        change_24k: req.body.change_24k
                    }, function(err) {
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
        })
    },

    /**
     * add the new price
     * @param {*} req 
     * @param {*} res 
     */
    add: function (req, res) {
        var price = new Price({
            sell_18k: req.body.sell_18k,
            buy_18k: req.body.buy_18k,
            change_18k: req.body.change_18k,

            sell_24k: req.body.sell_24k,
            buy_24k: req.body.buy_24k,
            change_24k: req.body.change_24k
        })

        staff.save(function (err) {
            if (err)
                res.json({ message: "Error", error: err })
            else
                res.json({
                    message: "Success",
                    title: "New price Created",
                })
        });
    },

    /**
     * delete price *validation* manager or higher level
     * @param {*} req 
     * @param {*} res 
     */
    delete: function (req, res) {
        Staff.find({_id: req.params.user_id}, function(err, curr_user){
            if (err)
                res.json({ message: "Error", error: err })
            else if (curr_user[0].user_type > 4)
                res.json({ message: "Error", error: "Access error" })
            else{
                Price.remove({ _id: req.params.id }, function (err) {
                    if (err)
                        res.json({ message: "Error", error: err })
                    else
                        res.json({
                            message: "Success",
                            title: "Price Deleted",
                        })
                })
            }

        })
    }
}