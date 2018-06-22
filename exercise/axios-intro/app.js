var axios = require("axios");

var url = "https://api.vschool.io/ben/todo/";

// GET POST PUT DELETE
function getTodo(){
axios.get("https://api.vschool.io/ben/todo/")
.then(function (response) {
    console.log(response);
    //do stuff with the request as needed
  })
  .catch(function (error) {
    //handle the error as needed
    console.log(error);
  });

  function addTodo(todoItem){
    axios.post(url, todoItem)
    .then(function(response){
      console.log(response.data);
    })
    .catch(function(error){
      console.log(error);
    })
  }
  addTodo({
    title: "teach axios",
    discription: "this"
  })

 function getTodoById(id){
    axios.get(url + id)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }}
getTodo("5b27f048eec94d291400b528")

//delete

function deleteTodoById(id, editedTodo){
  axios.get(url + id + editedTodo)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}
deleteTodo("5b27f048eec94d291400b528")

//put request
function editTodo(id, editedTodo){
  axios.get(url + id + editedTodo)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}
editTodo("5b27f048eec94d291400b528",{completed: true, price: 15000})