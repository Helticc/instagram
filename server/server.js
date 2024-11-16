const express = require('express');
const app = express();
app.use("", userRoutes);
const { userRoutes } = require("./routes/userRoutes")
const mongoose = require('mongoose');

const PORT = 3333;

const connectToDB = () => {
    try {
        mongoose.connect('mongodb+srv://Odser:<db_password>@hop-1a.fghwt.mongodb.net/instagram?retryWrites=true&w=majority&appName=HOP-1A');
    } catch (error) {
        throw new (error, "unable to connect")
    }
}


app.listen(PORT, () => console.log(`this server is running on ${PORT}`))