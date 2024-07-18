import express from "express"
import dotenv from "dotenv"
import connectDB from "./db/db.js";
import cors from "cors"
import route from "./routes/route.js";
import bodyParser from "body-parser";
import { adduser } from "./controllers/user-controller.js";
const app = express();
dotenv.config();
const PORT = process.env.PORT || 8000;


connectDB()

// app.get('/home', (req, res) => {
//     res.send(" this is my backend home page")
// })
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors({
    origin: ['http://localhost:3000', 'https://whats-app-clone-2-tawny.vercel.app/'],
}));
app.use('/', route)
app.listen(PORT, () => {
    console.log(`we are on ${PORT} PORT `)
})
