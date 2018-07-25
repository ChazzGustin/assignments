const express = require("express");
const uuid = require("uuid");
const bodyParser = require("body-parser");
//you can pick the number for the port
const port = 8008;
const app = express();

let todos = require("./todos.js");

//middleware
app.use(bodyParser.json());

app.route("/todos")
    .get((req, res) => {
        res.send(todos);
    })
    //post request:
    //convert request body from json
    //provide an ID to the data being added
    .post((req, res) => {
        //give data in request body and id
        console.log(req.body)
        const newtodo = req.body;
        newtodo._id = uuid();
        //save the data in request body to the 'database'
        todos.push(newtodo);
        //send back the data that was added
        res.send(newtodo);
    })
//Get one request
//any requests to the /todos/id endpoint we will send back the todo matching that id

app.route("/todos/:id")
    .get((req, res) => {
        const { id } = req.params;
         console.log(req.params.id);
        const foundtodo = todos.filter(todo => todo._id === id)[0];
        res.send(foundtodo);
         res.send(todos)
    })
    .delete((req, res)=> {
        const {id} = req.params;
        //find and remove todo matching the id provided
        todos = todos.filter(todo => todo._id !== id);
        res.send();
    })
    //put request
    .put((req, res)=>{
        //find the param id
        const {id} = req.params;
        let editedtodo = req.body;
        todos = todos.map(todo => todo._id === id ? editedtodo = {...todo, ...editedtodo} : todo);
        res.send(editedtodo);
    })


app.listen(port, () => console.log("server running on port " + port));