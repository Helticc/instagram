// const userModel = require("../models/userSchema")
// const { Router } = require("express")

// const express = require("express");
// const app = express();
// app.use(express.json());

// let db;
// app.post("/users", async(req, res) => {
//     try {
//         const body = req.body;
//         res.send(body);
//         const response = await db.collection("users").insertOne(body);
//         res.send(response);
//     } catch (error) {
//         res.send(error, "unable to request");
//     }
// });

// app.delete("/users", async(req, res) => {
//     try {
//         const body = req.body;
//         res.send(body);
//         const response = await db.collection("users").deleteOne({_id: new ObjectId(id)});
//     }catch (error) {
//         res.send(error, "unable to delete")
//     }
// })
