import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());


// app.use(cors({
//   origin: "https://authhaven.vercel.app/", 
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   credentials: true
// }));




app.use(express.json());

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
