var staffs = require("../controllers/staffs")

module.exports = function (app) {
    app.get('/', function (req, res) {
        staffs.index(req,res)
    })
    // all other routes
}        