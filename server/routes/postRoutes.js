const Route = require("express");
const postModel = require("../models/postSchema");

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

postRoute.post("/post", async(req, res) => {
    const authHeader = req.headers('authorization');
    if(!authHeader) res.json({message: "no token in header"});
    const token = authHeader.split(" ")[1];
    console.log(token);
    try {
        const createdPost = await postModel
        .find()
        .populate("userId", "username postImage");
        res.json(createdPost)
    } catch (error) {
        res.status(500).json(error);
    };
});

postRoute.get('/posts', async(req, res) => {
    const response = await postModel.find().populate('userId', "postImage username caption")
    res.json(response)
})

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