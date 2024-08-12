const mongoose =  require("mongoose");

const ProductSchema = new mongoose.Schema({
    image: String,
    name: String,
    price: Number,
    discount: Number,
    bgColor: String,
    panelColor: String,
    textColor: String,

});

module.exports = mongoose.model("product", ProductSchema);