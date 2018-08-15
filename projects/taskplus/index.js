const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const peopleRouter = require("./routes/peopleRoutes.js");
const choreRouter = require("./routes/choreRoutes.js");

const app = express();
const PORT = 8080;
const MONGODB_URI = "mongodb://localhost:27017/taskplus";


app.use(bodyParser.json());

app.use("/people",require ("./routes/peopleRoutes.js"))
app.use("/chores",require ("./routes/choreRoutes.js"))

mongoose.connect(MONGODB_URI, {useNewUrlParser:true} )
.then(() => console.log('connected to mongoDB'))
.catch(err => console.log(err))

app.listen(PORT, () => console.log(`sup chazz,
 your server running on port ${PORT}`));