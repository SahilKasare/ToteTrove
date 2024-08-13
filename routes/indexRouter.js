const express = require("express");
const router = express.Router();


router.get("/", function(req, res){
    // res.send("Hello into the index, from app.js.");
    res.render("index.ejs");
})



module.exports = router;