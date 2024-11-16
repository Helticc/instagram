const postModel =  require("../models/postSchema");
const { Route } = require("express");
const express = require("express");
const app = express();
app.use(express.json());

const postRoute = Route();

postRoute.post("/posts", async(req, res) => {
    const { caption, postImage, userId } = req.body;
    try {
        const createdPost = await postModel.create({
            caption, 
            postImage,
            userId
        });

        await userModel.findByIdAndUpdate(userId, {
            $push: {
                posts: createdPost._id
            },
        });
    } catch (error) {
        throw new error(error);
    }
})

postRoute.delete("/posts", async(req, res) => {
    const { caption, postImage, userId } = req.body;
    try {
        const createdPost = await postModel.create({
            caption,
            postImage,
            userId
        });

        await userModel.findByIdAndDelete(userId, {

        }) 
    }catch (error) {
        throw new error(error);
    }
})