const { Schema, mongoose } = require("mongoose");

const commentSchema = new Schema({
    userId: { type: mongoose.Types.ObjectId, ref: "Users" },
    postId: { type: mongoose.Types.ObjectId, ref: "Post" },
    comment: { type: string, require: true }
},
    { timestamps: true }
);

const commentModel = mongoose.model("comments", commentSchema);

module.exports = commentModel;