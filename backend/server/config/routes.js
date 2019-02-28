var staffs = require("../controllers/staffs")
var user_types = require("../controllers/user_types")

module.exports = function (app) {
    app.get('/', function (req, res) {
        staffs.getAll(req, res)
    })

    //*********Staff*******************/

    app.get("/staffs/:id", function (req, res) {
        staffs.getBelowStaffs(req, res)
    })

    app.get("/all_staffs", function (req, res) {
        staffs.getAll(req, res)
    })

    app.post("/staff/:id", function (req, res) {
        staffs.create(req, res)
    })

    app.put("/staff/:id", function (req, res) {
        staffs.update(req, res)
    })

    app.patch("/staff/:id", function (req, res) {
        staffs.delete(req, res)
    })


    //*********USER TYPE*******************/
    app.get("/all_user_types", function (req, res) {
        user_types.getAll(req, res)
    })
    app.get("/user_types/:id", function (req, res) {
        user_types.getAllByUser(req, res)
    })

    app.post("/user_types", function (req, res) {
        user_types.create(req, res)
    })

    app.put("/user_types", function (req, res) {
        console.log(req.body)
        user_types.update(req, res)
    })

    app.patch("/user_types", function (req, res) {
        user_types.delete(req, res)
    })
    // all other routes
}        