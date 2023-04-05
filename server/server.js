import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

// const express = require("express");
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const helmet = require("helmet");
// const morgan = require("morgan");

const app = express();

dotenv.config();
const PORT = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(bodyParser.json());
app.use(morgan("common"));

app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));

//Data Imports
// const User = require("./models/ecommerce.model");
import User from "./models/ecommerce.model.js";
import { dataUser } from "./data/index.js";

// MONGOOSE SETUP
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    //Only need to add this data once, check mongoDB and I should see the data there, if I uncomment the next line, then I'll receive a server error
    // User.insertMany(dataUser);
  })
  .catch((err) =>
    console.log("Something went wrong in the mongoose file", err)
  );
