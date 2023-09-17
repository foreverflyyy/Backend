import express from "express";
import mongoose from "mongoose";
import router from "./routers/router.js";
import {logger, dateRequest} from "./middleware.js"

const PORT = 5000;
const DB_URL = `mongodb+srv://user:user@cluster0.q63ld.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const app = express();

app.use(express.json());

app.use(dateRequest);
app.use(logger);
app.use("/api", router);

async function startApp() {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log("Start listening server on PORT " + PORT));
    } catch(err) {
        console.log(err);
    }
}

startApp();