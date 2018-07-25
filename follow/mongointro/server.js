//Depenatncies 
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
//Variables
const PORT = 8008;
const app = express();
const MONGODB_URI = 'mongodb://localhost:27017/demo';

app.use("/bounties", require ("./routes/bounties"));

mongoose.connect(MONGODB_URI,{ useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error(err));

app.listen(PORT, () => console.log(`server running on port ${PORT}`));