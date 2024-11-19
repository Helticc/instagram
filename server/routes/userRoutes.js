const Route = require("express");
const userModel = require("../models/userSchema");

const userRoute = Route();

userRoute.post("/signup", async (req, res) => {
    const { username, password, email } = req.body;
    try {
        const user = await userModel.create({
            username,
            password,
            email,
        });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error); 
    };
});

userRoute.delete("/signup", async (req, res) => {
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