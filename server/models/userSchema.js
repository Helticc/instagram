const { Schema, mongoose } = require("mongoose");

const userSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    profileImage: { type: String },
    bio: { type: String }
});

const userModel = mongoose.model("Users", userSchema);

module.exports = userModel;