const { Schema, mongoose } = require("mongoose");

const postSchema = new Schema(
    {
    caption: { type: String, required: true },
    postImage: { type: String, required: true },
    userId: { type: mongoose.Types.ObjectId, ref: "Users" },
    comments: {type:mongoose.Types.ObjectId, ref: "Comments"},
    likes: {type:mongoose.Types.ObjectId, ref: "Users"}
    },
    {
        timeStamps: true
    }
);

const postModel = mongoose.model("Post", postSchema);

module.exports = postModel