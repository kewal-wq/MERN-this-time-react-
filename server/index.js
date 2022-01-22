import express from "express";
import mongoose from "mongoose";
import User from "./models/userSchema.js";
import cors from "cors";

const app = express();
mongoose.connect('mongodb://localhost:27017/test')
.then(() => console.log("Local Database Connected!"))
.catch((e) => console.log("Oh no Local Database Connection failed", e));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Allows to send api request from react
app.use(cors());

app.get('/', (req, res) => {
    res.send("Wow we made it to the home page");
})

app.get('/users', (req, res) => {
    // try {
    //     const users = User.find({});
    // // console.log(users);
    
    // } catch (e) {
    //     res.status(500).json({message: "Error while finding users"});
    // }
//This is only to test the data in the backend for the frontend i will write diffrently
    const users = User.find({}, (err, result) => {
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(result);
        }
    })

    })
    


app.post('/users/new',async (req, res) => {
    // console.log(req.body);
    try {
        const newUser = new User(req.body);
            
    
await newUser.save();
res.json(req.body);
        
    } catch (e) {
        res.status(500).json({message: "Error while creating new user"});
    }

})

const PORT = 5000;
app.listen(5000, (req, res) => {
    console.log(`Listning to the port ${PORT}`);
})