const Route = require("express");
const likeModel = require("../models/likeSchema");
const postModel = require("../models/postSchema");

const likeRoute = Route();

likeRoute.post("/post/like", async (req, res) => {
    const { postId, userId } = req.body;
    try {
        const likeResponse = await likeModel.create({
            postId: postId,
            userId: userId,
        });

        const likedPostResponse = await postModel.findByIdAndUpdate(postId, {
            $addToSet: {
                likes: likeResponse._id
            }
        });

        res.status(200).json(likedPostResponse);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = likeRoute;