const express = require("express");
const router = express.Router();
const upload = require("../config/multerConfig");
const productModel = require("../models/product-model");
router.get("/", function(req, res){
    res.send();
});

router.post("/create", upload.single("image"), async function(req, res){
    // res.send(req.file);
    try{
        let {name, price, discount, bgColor, panelColor, textColor} = req.body;
        let product = await productModel.create({
            image: req.file.buffer,
            name,
            price, 
            discount, 
            bgColor,
            panelColor,
            textColor,
        });
        req.flash("success", "Product created successfully.");
        res.redirect("/owners");
    }catch (err){
        res.send(err.message);
    }
});



module.exports = router;