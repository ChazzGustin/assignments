const express = require("express");
const bodyParser = require("body-parser");
const uuid = require("uuid");
const PORT = 8080;

const MOVIE = [];

const app = express();
app.use(bodyParser.json());

app.route("/movie") 
    .get((req, res) => {
        console.log(req);
        res.send("MOVIE");
    })
    .post((req ,res) => {
        //save new movie
        let newMovie = req.body;
        //give it ID
        newMovie._id = uuid();
        //'save' to our database
        MOVIE.push(newMovie);
        //send movie back
        res.send(newMovie);
    })
    app.route("/movies/:id")
        .get((req,res) => {
            let foundMovie = MOVIES.find(movie =>  movie._id === req.params.id);
            res.send(foundMovie);
        })
        
app.listen(PORT, ()=> console.log(`server running on port ${PORT}`));