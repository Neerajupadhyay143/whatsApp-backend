import communication from "../models/Communication.models.js";
import message from "../models/Message.models.js"

export const newCommunication = async (req, res) => {
  try {
    const senderId = req.body.senderId;
    const reciverId = req.body.reciverId;



    const exist = await communication.findOne({ members: { $all: [reciverId, senderId] } })

    if (exist) {
      return res.status(200).json('communication already exist ')
    }

    const newCommunication = new communication({
      members: [senderId, reciverId]
    });
    await newCommunication.save()

    return res.status(200).json('communication  saved successfully');
  } catch (error) {
    return res.status(500).json(error)

  }


}



// export const getCommunication = async (req, res) => {
//     try {
//         const senderId = req.body.senderId;
//         const reciverId = req.body.reciverId;

//         let Communication = await communication.findOne({
//             members: { $all: [senderId, reciverId] }
//         });

//         if (!Communication) {
//             return res.status(404).json("No communication found");
//         }

//         const latestMessage = await message.findOne({ communicationId: Communication._id.toString() }).sort({ createdAt: -1 });
//         console.log(" latest message aaya :", latestMessage)

//         return res.status(200).json(
//             Communication

//         );

//     } catch (error) {
//         console.log(error);
//         return res.status(500).json("error to get the data in mongodb");
//     }
// }



// export const getCommunication = async (req, res) => {
//     try {
//         const senderId = req.body.senderId;
//         const reciverId = req.body.reciverId;

//         let Communication = await communication.findOne({
//             members: { $all: [senderId, reciverId] }
//         });

//         if (!Communication) {
//             return res.status(404).json("No communication found");
//         }

//         const latestMessage = await message.findOne({
//             communicationId: Communication._id.toString()
//         }).sort({ createdAt: -1 });

//         console.log(" latest message aaya :", latestMessage);

//         return res.status(200).json({
//             communication: Communication,
//             message: latestMessage ? latestMessage.text : null,
//             updatedAt: latestMessage ? latestMessage.updatedAt : null
//         });

//     } catch (error) {
//         console.log(error);
//         return res.status(500).json("error to get the data in mongodb");
//     }
// };

export const getCommunication = async (req, res) => {
  try {
    const senderId = req.body.senderId;
    const reciverId = req.body.reciverId;

    let Communication = await communication.findOne({
      members: { $all: [senderId, reciverId] }
    });

    if (!Communication) {
      return res.status(404).json("No communication found");
    }

    const latestMessage = await message.findOne({
      communicationId: Communication._id.toString()
    }).sort({ createdAt: -1 });




    return res.status(200).json(
      {
        communication: Communication,
        message: latestMessage ? latestMessage.text : null,
        updatedAt: latestMessage ? latestMessage.updatedAt : null,
      }
    );



  } catch (error) {
    console.log(error);
    return res.status(500).json("error to get the data in mongodb");
  }
};
