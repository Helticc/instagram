const { Schema, mongoose } = require("mongoose");

const userSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    createdAt: { type: Date, required: true},
    updatedAt: { type: Date, required: true},
    profileImage: { type: String }
});

const userModel = mongoose.model("User", userSchema);

module.exports = {userModel};