import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routers/userRoutes.js";

const app = express();
mongoose.connect('mongodb://localhost:27017/test')
.then(() => console.log("Local Database Connected!"))
.catch((e) => console.log("Oh no Local Database Connection failed", e));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Allows to send api request from react
app.use(cors());

app.get('/', (req, res) => {
    res.send("Yay!, we made it to the home route");
})

app.use('/users', userRoutes);
const PORT = 5000;
app.listen(5000, (req, res) => {
    console.log(`Listning to the port ${PORT}`);
})