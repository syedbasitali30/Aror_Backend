require("dotenv").config();

const express = require("express");
// Mongoose is a JavaScript object-oriented programming
// library that creates a connection between MongoDB and
// the Node.js JavaScript runtime environment.
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

// MongoDB connection String
const mongoString = process.env.DATABASE_URL;

// Import all application routes
const Degree_routes = require("./routes/Degree");
const Register_routes = require("./routes/Register");
const User_routes = require("./routes/User");
const Program_routes = require("./routes/Program");
const AllDrop_routes = require("./routes/AllDrop");

// Connect mongodb to nodejs with mongoose
mongoose.connect(mongoString);
const database = mongoose.connection;

// Just check a db connection
database.on("error", (error) => {
  console.log(error);
});

// Chech connection was success or not
database.once("connected", () => {
  console.log("Database Connected");
});

// Express is a node js web application framework that
// provides broad features for building web and mobile
// applications. It is used to build a single page,
// multipage, and hybrid web application. It's a
// layer built on the top of the Node js that helps
//  manage servers and routes.

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

//Declear all routes of your application
app.use("/Degree", Degree_routes);
app.use("/Register", Register_routes);
app.use("/User", User_routes);
app.use("/Program", Program_routes);
app.use("/AllDrop", AllDrop_routes);

//

app.listen(5000, () => {
  console.log(`Server Started at ${5000}`);
});
