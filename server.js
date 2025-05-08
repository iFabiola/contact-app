import express from "express";
import router from "./routes/routes.js";

const PORT = 8500;
const app = express();

app.use(express.json({limit: '10mb'}), router);


app.listen(PORT, function() {
    console.log("listening on http://127.0.0.1:" + PORT)
})