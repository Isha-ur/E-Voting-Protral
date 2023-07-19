// requiring dependencies
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const mongoose = require("mongoose");
const connectDB = require("./configDB/db");

const authRoute = require("./routes/authRoute.js")
// config
dotenv.config();

// connect DB
connectDB();


// creating app
const app = express();

// middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// 
app.use('/api/v1/auth',authRoute)

// app.method("path",callback())
app.get("/",(req,res)=>{
    res.send("hello");
})

app.get("/about",(req,res)=>{
    res.send("about");
})

const PORT =  process.env.PORT || 4000;

app.listen(PORT, ()=>{
    console.log(`server at ${PORT}`);
})