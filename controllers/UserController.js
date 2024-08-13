const UserModel = require("../models/user-models");
const bcrypt = require("bcrypt");
const {generateToken} = require("../utils/generateToken");


module.exports.registerUser = async function(req, res){
    try{
        let {email, password, fullname} = req.body;

        let user = await UserModel.findOne({email: email});
        if(user) return res.send("User Already Exists.");

        bcrypt.genSalt(10, function(err, salt){
            bcrypt.hash(password, salt, async function(err, hash){
                if(err) return res.send(err);
                else {
                    let user = await UserModel.create({
                        email,
                        password: hash,
                        fullname,
                    });
                    // res.send(user);
                    let token = generateToken(user);
                    res.cookie("token", token);
                    // res.send(token);
                    res.send("User Created.")
                }
            })
        })
    }catch (err){
        console.log(err);
    }
}