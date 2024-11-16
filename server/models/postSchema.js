const { Schema, mongoose } = require("mongoose");

const postSchema = new Schema({
    caption: { type: String, required: true },
    postImage: { type: String, required: true },
    userId: { type: mongoose.Types.ObjectId, ref: "User" },
    createdAt: { type: Date, required: true},
    updatedAt: { type: Date, required: true},
    timeStamps: true
});

const postModel = mongoose.model("Post", postSchema);

module.exports = {postModel};