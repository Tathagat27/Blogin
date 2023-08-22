import express from "express";
import path from 'path';

const app = express();
const PORT = process.env.PORT || 8000;

// setting views
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.get('/', (req, res) => {
    res.render('home');
});



app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));