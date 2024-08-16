const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owners-model");

//only one owner should be created
router.post("/create", async function (req, res){
    let owners = await ownerModel.find();
    if(owners.length > 0){
        return res.send(503, "You dont have permission to create owner.")
    }

    const {fullname, email, password} = req.body;
    let createdOwner = await ownerModel.create({
        fullname,
        email,
        password,
    });

    res.status(201).send("Owner Created.");
})


router.get("/", function(req, res){
    let success = req.flash("success");
    res.render("createproducts.ejs", { success });
});

// router.get("/admin", function(req, res){
// });

module.exports = router;