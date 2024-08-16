const UserModel = require("../models/user-models");
const bcrypt = require("bcrypt");
const {generateToken} = require("../utils/generateToken");


module.exports.registerUser = async function(req, res){
    try{
        let {email, password, fullname} = req.body;

        let user = await UserModel.findOne({email: email});
        if(user) return res.send("You already have an account, please login");

        bcrypt.genSalt(10, function(err, salt){
            bcrypt.hash(password, salt, async function(err, hash){
                if(err) {
                    return res.redirect("/");
                    //  res.send(err);
                }else {
                    let user = await UserModel.create({
                        email,
                        password: hash,
                        fullname,
                    });
                    // res.send(user);
                    let token = generateToken(user);
                    res.cookie("token", token);
                    // res.send(token);
                    // res.send("User Created.")
                    res.redirect("/shop");
                }
            })
        })
    }catch (err){
        console.log(err);
    }
}

module.exports.loginUser = async function(req, res){
    try{
        let {email, password} = req.body;
        let user = await UserModel.findOne({email:email});
        if(!user) {
            res.send("Incorrect email or password.");
            return res.redirect("/");
        }

        bcrypt.compare(password, user.password, function(err, result){
            // res.send(result);
            if(result){
                let token = generateToken(user);
                res.cookie("token", token);
                res.redirect("/shop");
                // res.send("Hello into the shop.");
            }else{
                res.send("Incorrect email or password.");
            }
        });
    }catch (err){
        console.log(err);
    }
}

module.exports.logout = async function(req, res){
    res.cookie("token", "");
    res.redirect("/");
}