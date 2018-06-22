var section = document.querySelector("section");
var form = document.querySelector("form");
// make a GET request using axios
var url = "https://api.vschool.io/ben/todo/";

var displayTodo = function (todo) {
    //make wrapper
    var wrapper = document.createElement("div");

    //make header
    var h3 = document.createElement("h3");
    h3.innerHtml = todo.title;

    //make description
    var descP = document.createElement("p");
    descP.innerHTML = todo.description;

    //make price
    var priceP = document.createElement("p");
    priceP.innerHTML = todo.price;

    // make checkbox
    var label = document.createElement("label");
    label.innerHTML = "Completed";

    var input = document.createElement("input");
    input.type = "checkbox";
    label.appendChild(input);

    //make delete button
    

    // append all the things to the wrapper
    wrapper.appendChild(h3);
    wrapper.appendChild(descP);
    wrapper.appendChild(priceP);
    wrapper.appendChild(label);

    // append them to the section
    section.appendChild(wrapper);
}

axios.get(url)
    .then(function (response) {
        // convert data into html elements
        var todos = response.data;
        todos.forEach(displayTodo);
    })
    .catch(function (err) {
        console.log(err);
    });

form.addEventListener("submit", function(e){
    // store input values in an todo object

    // POST the todo using axios

    // call the displayTodo function with response data;
})