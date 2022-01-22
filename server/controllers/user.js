import User from "../models/userSchema.js";



export const getUsers =  (req, res) => {
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
            res.status(500).json(err);
        }
        else{
            res.json(result);
        }
    })

    }
    


export const createUser = async (req, res) => {
    // console.log(req.body);
    try {
        const newUser = new User(req.body);
            
    
await newUser.save();
res.json(req.body);
        
    } catch (e) {
        res.status(500).json({message: "Error while creating new user"});
    }

};

export const updateUser = async(req, res) => {
    const {id} = req.params;
     const updatedUser = User.findByIdAndUpdate(id, ...req.body);
     await updateUser.save();
}
