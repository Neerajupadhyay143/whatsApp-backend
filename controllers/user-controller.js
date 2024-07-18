
import User from "../models/User.models.js"
import multer from 'multer';

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

// Configure multer for file upload
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'uploads/');
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + '-' + file.originalname);
//     }
// });

// const upload = multer({ storage: storage });

// export const uploadImage = async (req, res) => {
//     try {
//         const userId = req.body.sub;
//         const imageUrl = `/uploads/${req.file.filename}`;

//         const user = await User.findById(userId);
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         user.picture = imageUrl;
//         const updatedUser = await user.save();

//         res.json({ imageUrl: updatedUser.picture });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };

// export { upload };



//  for uploading profile image function

// export const updateProfileImage = async (req, res) => {
//     try {
//         const { userId } = req.params;
//         const { imageUrl } = req.body;

//         console.log(imageUrl)

//         const user = await User.findByIdAndUpdate(userId, { profileImage: imageUrl }, { new: true });
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         res.json({ imageUrl: user.profileImage });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };