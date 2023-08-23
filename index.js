import express from "express";
import mongoose from "mongoose";
import path from 'path';
import * as dotenv from "dotenv";
import { router as userRoute } from "./routes/user.js";

const app = express();
const PORT = process.env.PORT || 8000;

dotenv.config();

// connect DB
mongoose.connect(process.env.MONGO_URI).then(e => console.log('MongoDB connected'));

// setting views
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.render('home');
});

app.use('/user', userRoute);

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
