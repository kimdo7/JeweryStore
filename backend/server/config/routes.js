var staffs = require("../controllers/staffs")
var user_types = require("../controllers/user_types")
var prices = require("../controllers/prices")
var categories = require("../controllers/categories")
var items = require("../controllers/items")

module.exports = function (app) {
    app.get('/', function (req, res) {
        staffs.getAll(req, res)
    })

    /**
     **================Staff===================* 
     */
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

    app.post("/logIn", function (req, res) {
        staffs.logIn(req, res)
    })

    /**
     **================PRICE===================* 
     */
    app.get("/prices", function (req, res) {

    })
    app.get("/price", function (req, res) {
        prices.current_price(req, res)
    })

    app.post("/price/:id", function (req, res) {
        prices.add(req, res)
    })

    app.put("/price/:id", function (req, res) {
        prices.update(req, res)
    })

    app.patch("/price/:id/:user_id", function (req, res) {
        prices.delete(req, res)
    })

    /**
     **================CATEGORY===================* 
    */
    app.get("/all_category", function(req, res){
        categories.getAll(req, res)
    })

    app.post("/category", function(req, res){
        categories.add(req, res)
    })

    app.put("/category", function(req, res){
        categories.put(req, res)
    })

    app.patch("/category/:id", function(req, res){
        categories.delete(req, res)
    })

    /**
     **================ITEMS===================* 
    */
    app.get("/all_items", function(req, res){
        items.get_all(req, res)
    })

    app.post("/item/:category_id", function(req, res){
        items.add(req, res)
    })

    app.patch("/item/:category_id", function(req, res){
        items.delete(req, res)
    })

    app.put("/item/:category_id", function(req, res){
        items.update(req, res)
    })



    /**
     **================USER TYPE===================* 
     */
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
        user_types.update(req, res)
    })

    app.patch("/user_types/:id", function (req, res) {
        user_types.delete(req, res)
    })
    // all other routes
}        