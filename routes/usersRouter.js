const express = require("express");
const router = express.Router();
const {registerUser} =require("../controllers/UserController");
router.get("/", function(req, res){
    res.send("Hello into the users.")
});


router.post("/register", registerUser);

module.exports = router;