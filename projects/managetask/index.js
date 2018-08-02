const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors');
const peopleRouter = require("./routes/peopleRoutes.js");
const choreRouter = require("./routes/choreRoutes.js");

const app = express();
const PORT = 8080;

app.use(bodyParser.json());
app.use(cors());
app.use("/people", peopleRouter);
app.use("/chores", choreRouter);

mongoose.connect("mongodb://localhost:27017/turn-taker", (err)=>{
    if(err) console.error(err);
    console.log("connected to mongodb");
})

app.route("/home")
    .get((req,res) => {
        res.send("awwwww biiiiittttccchhhhh")
    })




app.listen(PORT, () => {
    console.log(`server is listening on port: ${PORT}`)
});