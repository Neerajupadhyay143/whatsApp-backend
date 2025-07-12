
import User from "../models/User.models.js"
export const adduser = async (req, res) => {

    try {
        const { sub, given_name } = req.body;

        if (!sub || !given_name) {
            return res.status(400).json({ msg: "Missing required fields" });
        }

        const exist = await User.findOne({ sub });

        if (exist) {
            return res.status(200).json({ msg: "User already exists" });
        }

        const newUser = new User(req.body);
        newUser.username = given_name;

        await newUser.save();
        return res.status(200).json(newUser);
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }

}

export const getUsers = async (req, res) => {
    try {
        const users = await User.find({})
        return res.status(200).json(users);

    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
}
