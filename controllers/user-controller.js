
import User from "../models/User.models.js"

export const adduser = async (req, res) => {
    try {

        const exist = await User.findOne({ sub: req.body.sub });

        if (exist) { 
            res.status(200).json({ msg: "user already exist" })
            return;
        }
        // let newUser = new User(req.body);
        // let tempUser = { ...newUser, "username": newUser.given_name }
        // newUser = tempUser
        const newUser = new User(req.body);
        newUser.username = newUser.given_name;
        console.log(newUser)
        await newUser.save();
        return res.status(200).json(newUser)

    } catch (error) {
        return res.status(500).json(error.message)
    }
}

export const getUsers = async (req, res) => {
    try {
        const users = await User.find({})
        return res.status(200).json(users);

    } catch (error) {
        return res.status(500).json(error.message)
    }
}