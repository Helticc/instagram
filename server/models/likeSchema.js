const { Schema, mongoose } = require("mongoose");

const likeSchema = new Schema(
    {
        postId: { type: mongoose.Types.ObjectId, ref: "Post", required: true },
        userId: { type: mongoose.Types.ObjectId, ref: "Users", required: true }
    },
    {
        timestamps: true
    }
)

const likeModel = mongoose.model("Likes", likeSchema);

module.exports = likeModel;