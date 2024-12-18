const mongoose = require("mongoose");
require("dotenv").config();

// const mongoUri = "mongodb://localhost:27017/auth-service-db";
mongoose.connect(process.env.MONGODB_URI, {});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

module.exports = db;
