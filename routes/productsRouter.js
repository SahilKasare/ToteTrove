const express = require("express");
const router = express.Router();

router.get("/", function(req, res){
    res.send("Hello into the Products.")
});

module.exports = router;