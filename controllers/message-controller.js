import communication from "../models/Communication.models.js"
import message from "../models/Message.models.js"

// export const newMessage = async (req, res) => {
//     try {
//         const newMessage = new message(req.body)
//         await newMessage.save()
//         await communication.findByIdAndUpdate(req.body.communicationId,
//             { $push: { message: req.body.text } },
//             { new: true });

//         res.status(200).json("successfully message sent")

//     } catch (error) {
//         console.log(error)
//     }

// }

export const newMessage = async (req, res) => {
    try {
        const newMsg = new message(req.body);
        await newMsg.save();
        res.status(200).json(newMsg)
    } catch (error) {
        console.log(error)
        res.status(500).json("error saving message")
    }
}



// export const getMessages = async (req, res) => {
//     try {
//         const { communicationId } = req.body;

//         const messages = await message.find({ communicationId }).sort({ createdAt: 1 });

//         if (!messages.length) {
//             return res.status(404).json("No messages found");
//         }

//         return res.status(200).json(messages);

//     } catch (error) {
//         console.log(error);
//         res.status(500).json("Error fetching messages");
//     }
// };


export const getMessages = async (req, res) => {
    try {
        let messages = await message.find({ communicationId: req.params.id }).sort({ createdAt: 1 });
        return res.status(200).json(messages)
    } catch (error) {
        res.status(500).json(error)
    }
}

