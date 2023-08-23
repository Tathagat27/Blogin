import express from "express";
import mongoose from "mongoose";
import path from 'path';
import * as dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { checkForAuthCookie } from "./middlewares/authenticatoin.js";

import { router as userRoute } from "./routes/user.js";
import { router as blogRoute } from "./routes/blog.js";
import { Blog } from "./models/blog.js";

const app = express();
const PORT = process.env.PORT || 8000;

dotenv.config();

// connect DB
mongoose.connect(process.env.MONGO_URI).then(e => console.log('MongoDB connected'));

// setting views
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(checkForAuthCookie('token'));
app.use(express.static(path.resolve('./public')));

app.get('/', async (req, res) => {

    const allBlogs = await Blog.find({});

    res.render('home', {
        user: req.user,
        blogs: allBlogs,
    });
});

app.use('/user', userRoute);
app.use('/blog', blogRoute);

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
