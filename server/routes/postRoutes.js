const Route = require("express");
const postModel = require("../models/postSchema");

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
                userId: createdPost.ObjectId(_id)
            },
        });
        res.status(200).json(createdPost);
    } catch (error) {
        res.status(500).json(error);
    }
})

postRoute.get('/posts', async(req, res) => {
    const response = await postModel.find().populate('userId')
    res.json(response)
})

module.exports = postRoute;