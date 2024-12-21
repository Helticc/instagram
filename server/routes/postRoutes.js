const Route = require("express");
const postModel = require("../models/postSchema");
const authMiddleware = require("../authmiddleware");
const postRoute = Route();

postRoute.post("/post/create", async(req, res) => {
    const { caption, postImage, userId } = req.body;
    try {
        const createdPost = await postModel.create({
            userId,
            caption, 
            postImage,
        });
        res.send(createdPost);
    }catch (err) {
        res.json({message: `unable to create post ${err}`});
    };
});

postRoute.get("/posts", authMiddleware, async(req, res) => {
    try {
        const createdPost = await postModel.find().populate("userId", "username postImage");
        res.json(createdPost)
    } catch (error) {
        res.status(500).json(error);
    };
});

postRoute.delete('/delete/posts', async(req, res) => {
     const {caption, postImage, userId} = req.body;
     try {
        const deletedPost = await postModel.deleteOne({
            caption,
            postImage,
            userId
        });
        res.send(deletedPost);
     }catch (err) {
        res.json({message: `unable to delete post ${err}`});
     }
})

module.exports = postRoute;