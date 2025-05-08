import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { ACTIONS } from "../controller/controller.js";

const router = express.Router();
const FILE_URL = fileURLToPath(import.meta.url);
let DIR = dirname(FILE_URL);

DIR = DIR.slice(0, DIR.lastIndexOf("\\")) + "\\public\\";
const PUBLIC = (filePath) => DIR + filePath;

router.get("/", function(request, response) {
    response.status(200).sendFile(PUBLIC("app.html"));
});

router.get("/fetch-contacts", async function(request, response) {
    let data = await ACTIONS.readContact();
    response.status(200).json(data[0]);
});

router.get("/register-endpoint", function(request, response) {
    const names = request.query.names;
    const phone = request.query.phone;
    const image = request.query.image;

    console.log(image);
    const email = request.query.email;

    const payload = {names: names, phone: phone, email: email}

    let result = ACTIONS.registerUser(payload);
    console.log(result);

    response.status(200).json({
        resut: result,
        message: "Data inserted"
    })
});

router.post("/register-endpoint",async function(request, response) {
    const payload = request.body;
    console.log(payload)

    let result = ACTIONS.registerUser(payload);
    console.log(result);

    response.status(200).json({
        resut: "123",
        message: "Data inserted"
    })
});

router.put("/update-contact", async function(request, response) {
    const payload = request.body;
    let result = await ACTIONS.updateUser(payload);

    response.status(200).json({
        resut: "Updated",
        msg: result, 
        message: "Data inserted"
    })

})

router.delete("/contact/:phone", async function(request, response) {
    const phone = request.params.phone;

    let result = await ACTIONS.deleteUser(phone);
    console.log(result);

    response.status(200).json({
        resut: "Deleted",
        msg: result, 
        message: "Data inserted"
    })
});


export default router;
