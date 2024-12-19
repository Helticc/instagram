const { Schema, mongoose } = require("mongoose");

const postSchema = new Schema(
    {
        _id: {type: mongoose.Type.ObjectId, ref: "Users"}
    }
);