import express from "express";
import mongoose from "mongoose";
import router from "./router.js"

const PORT = 5000;
const app = express();

app.use(express.json());
app.use("/api", router);

async function startApp() {
    try {
        app.listen(PORT, () => console.log("Start listening server on PORT " + PORT));
    } catch(err) {
        console.log(err);
    }
}

startApp();