import { User } from "../models/user.model.js"

const registerUser = async (req, res) => {
    try {
        const {username, email, password, department}= req.body;

        if(!username || !email || !password || !department){
            return res.status(400).json({message: "empty field detected"})
        }

        const existing = await User.findOne({ email: email.toLowerCase() });
        if(existing){
            return res.status(400).json({message: "user exist"});
        }

        const user = await User.create({
            username,
            email: email.toLowerCase(),
            password,
            department,
            loggedIn: false
        });

        res.status(201).json({
            message: "User Registered",
            user: {id: user._id, email: user.email, username: user.username, department: user.department}
        });
    } catch (error) {
        res.status(500).json({message: "error server", error: error.message });
    }
};

const loginUser= async (req, res) => {
    try {
        //nag exist na ang user?
        const {username, password} = req.body;


        const user = await User.findOne({
            username: username.toLowerCase()
        });

        if(!user) return res.status(400).json({
            message: "User not found"
        });

        //compare password
        const isMatch = await user.comparePassword(password);
        if (!isMatch) return res.status(400).json({
            message: "Invalid Credentials"
        })

        res.status(200).json({
            message: "user Login",
            user: {
            id: user._id,
            email: user.email,
            username: user.username
            } 
        })
    } catch (error) {
        res.status(500).json({
            message: "Server error"
        })
    }
}

const logoutUser = async (req, res) => {
    try { 
        const { username } = req.body;

        const user = await User.findOne({
            username: username.toLowerCase()
        });
        if(!user) return res.status(404).json({
            message: "User not found"
        });

        res.status(200).json({
            message: "Logout Successful"
        });
    } catch(error) {
        res.status(500).json({
            message: "Server error", error
        });

    }
}

const getUsers = async (req, res) => {
    try{
        const users = await User.find();
         res.status(200).json(users);
    } catch(error){
        res.status(500).json({
            message: "Server error", error
        });
    }
}
export{
    registerUser,
    loginUser,
    logoutUser,
    getUsers

};