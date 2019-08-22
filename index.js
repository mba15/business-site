const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const contactRouter = require("./routes/contact.js");
const clientRouter = require("./routes/client.js")

app.use(cors());
app.use(bodyParser.json());
app.use("/api/contacts", contactRouter)
app.use("/api/client", clientRouter)

mongoose.connect("mongodb://localhost:27017/rith", () => {
    console.log("Connected to MongoDB");
})

app.listen(8080, () => {
    console.log("Connected to port 8080, you have done it");
});


