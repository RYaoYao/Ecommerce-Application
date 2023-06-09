const express = require("express");
const ErrorHandler = require("./middlewares/error");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");


app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:'http://localhost:3000',
    credentials:true
}));
app.use("/", express.static("uploads"));
app.use(bodyParser.urlencoded({extended: true}));

const userRoute = require("./routes/user");

//configs
if(process.env.NODE_ENV !== "PRODUCTION"){
    require("dotenv").config({
        path:"./config/.env"
    });
}

//routes


app.use("/api/v2/user", userRoute);

app.use(ErrorHandler);

module.exports = app;