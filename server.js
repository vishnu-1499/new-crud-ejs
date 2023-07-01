const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const router = require("./routes/route");
const ejs = require("ejs");
const path = require("path");

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

mongoose.connect("mongodb+srv://harivishnu669:AxVXWG6zmpnzbR7z@cluster0.hhorg1c.mongodb.net/Employee",
{ useNewUrlParser: true, useUnifiedTopology: true},
    console.log("DB Connected...")
)

app.set("view engine", "ejs");
app.use("/",router);

app.listen(5000, (req,res) =>{
    console.log("Port Connected....");
});