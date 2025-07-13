import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/db.js";
import cors from "cors";
import route from "./routes/route.js";
import bodyParser from "body-parser";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 8000;


connectDB();


app.use(
    cors({
        origin: ["https://whats-app-clone-2-smoky.vercel.app"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);


app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.send("✅ WhatsApp Clone Backend is running successfully!");
});


app.use("/", route);

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Backend server live on PORT ${PORT}`);
});
