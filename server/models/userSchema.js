import mongoose from "mongoose";
const Schema = mongoose.Schema;


const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name cannot be empty!"]
    },
    age: {
        type: Number,
        required: [true, "Age cannot be empty!"]
    },
    username: {
        type: String,
        required: [true, 'Username cannot be empty']
    }

});

const User = mongoose.model("User", userSchema);
export default User;