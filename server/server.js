const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const userRoute = require("../server/routes/userRoutes");
const postRoute = require("../server/routes/postRoutes");
const likeRoute = require("../server/routes/likeRoutes");
const mongoose = require('mongoose');
dotenv.config();

const PORT = 3333;
const app = express();
app.use(cors());
app.use(express.json());

app.use(userRoute);
app.use(postRoute);
app.use(likeRoute);

const connectToDB = () => {
    try {
        mongoose.connect(process.env.MONGO_DB_URI);
    } catch (error) {
        res.send(error, "this is not working");
    }
}

connectToDB();

app.listen(PORT, () => console.log(`this server is running on ${PORT}`));