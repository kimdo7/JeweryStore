var users = require("../controllers/users")

module.exports = function (app) {
    app.get('/', function (req, res) {
        users.index(req,res)
    })
    // all other routes
}        