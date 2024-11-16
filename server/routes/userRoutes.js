const { Route } = require("express");
const userModel = require("../models/userSchema");

const userRoute = Route();

userRoute.post("/signup", async (req, res) => {

    // const {caption, postImage, userId} = req.body;
    // const createPost = await postModel.
});