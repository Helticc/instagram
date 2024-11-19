const express = require('express');
const app = express();
app.use(express.json());
const userRoute = require("../server/routes/userRoutes");
const postRoute = require("../server/routes/postRoutes");
const mongoose = require('mongoose');

const PORT = 3333;

app.use(userRoute);
app.use(postRoute);
const connectToDB = () => {
    try {
        mongoose.connect('mongodb+srv://Odser:7vEWl5s9WTAxBUqE@hop-1a.fghwt.mongodb.net/instagram?retryWrites=true&w=majority&appName=HOP-1A');
    } catch (error) {
        res.send(error, "this is not working");
    }
}
connectToDB();

app.listen(PORT, () => console.log(`this server is running on ${PORT}`));