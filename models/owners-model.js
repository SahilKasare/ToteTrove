const mongoose = require("mongoose");

const OwnerSchema = new mongoose.Schema({
        fullname: String,
        email: String,
        password: String,
        cart:{
            type: Array,
            default: []
        },
        products:{
            type: Array,
            default: []
        },
        contact: Number,
        picture: String,
    
}); 

module.exports = mongoose.model("owner", OwnerSchema);