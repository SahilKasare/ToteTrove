const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    fullname: {
      type: String,
      minLength: 3,
      trim: true,
    },
    email: String,
    password: String,
    cart: {
      type: Array,
      default: [],
    },
    orders: {
      type: Array,
      default: [],
    },
    contact: Number,
    picture: String,
  },
    {timestamps: true
  });

module.exports = mongoose.model("user", UserSchema);