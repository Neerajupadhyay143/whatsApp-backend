import mongoose from "mongoose";
import { Database_name } from "../constant.js";


const connectDB = async () => {

    const port = process.env.PORT || 8000

    const URL = process.env.DATABASE_URL || "mongodb+srv://whatsappneeraj:neerajwhatsapp@cluster0.aszkvny.mongodb.net/"
    try {
        const connectionInstance = await mongoose.connect(`${URL}${Database_name}`)

        console.log(`! mongoDB connected ${connectionInstance.connection.host} ${Database_name} ${port}`);
    } catch (error) {
        console.log("error to connect database ", error);
    }


}
export default connectDB