const express = require("express");   //require the express
const mongoose = require("mongoose");  // require the mongoose to connect the database
const path = require("path");        //requier to handle  the path

const urlRoutes = require("./routes/urlRoutes");     //handle the routes 

const app = express();  //this is for create the server

// Middleware
app.use(express.json());  //read the json formate 
app.use(express.urlencoded({ extended: true }));  //form data read

// View Engine
app.set("view engine", "ejs"); // use the ejs
app.set("views", path.resolve("./views"));   //file of ejs

// Static files
app.use(express.static("public"));   

// Routes
app.use("/", urlRoutes);

// DB Connect
mongoose.connect("mongodb://127.0.0.1:27017/url-shortner")
.then(() => console.log("MongoDB Connected"));

app.listen(3000, () => console.log("Server started"));