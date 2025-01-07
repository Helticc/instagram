const Route = require("express");
const userModel = require("../models/userSchema");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const userRoute = Route();
dotenv.config();

userRoute.post("/signup", async (req, res) => {
    const {username, email, password} = req.body;
    const saltRound = 10;
    try {
        const hashedPassword = await bcrypt.hash(password, saltRound);
        const createdUser = await userModel.create({
            username,
            email,
            password: hashedPassword,
        });
        const token = jwt.sign({
            userId: createdUser._id,
            username: createdUser.username
        }, process.env.JWT_SECRET, { expiresIn: '24h' });
        res.send({token});
    }catch (err) {
        res.json({message: `unable to send user ${err}`});
    }
    
});

userRoute.post("/login", async (req, res) => {
    const { password, email } = req.body;
    try {
        const user = await userModel.create({
            password,
            email,
        });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error); 
    };
});

userRoute.delete("/delete/user", async (req, res) => {
    const { username, password, email } = req.body;
    try {
        const user = await userModel.deleteOne({
            username,
            password,
            email,
        });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = userRoute;