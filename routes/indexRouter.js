const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middlewares/isLoggedIn");

router.get("/", function(req, res){
    // res.send("Hello into the index, from app.js.");
    let error = req.flash("error"); //got from the login flash which provided the error
    res.render("index.ejs", { error });
})

router.get("/shop", isLoggedIn, async function(req, res){

    res.render("shop.ejs");
    // res.send("Hello into the shop");
})

module.exports = router;