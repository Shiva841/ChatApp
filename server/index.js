//packages or dependencies 
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const conversationRoute = require("./Routes/conversation");
const messageRoute = require("./Routes/message");
const usersRoute = require("./Routes/users");


dotenv.config();

//mongodb configuration
mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);

//Middleware.
app.use(express.json());
app.use(helmet({crossOriginResourcePolicy: false,}));
app.use(morgan("common"));
app.use(cors());
app.use("/images",express.static(path.join(__dirname,"public/images")));


//RESTful Routes
app.use("/api/users",usersRoute);
app.use("/api/conversation",conversationRoute);
app.use("/api/message",messageRoute);

//server is active at port 8800
app.listen(8800, () => {
  console.log("Backend server is running!");
});