var form = document.getElementById("airline-form");
var submit = document.getElementById("submit");
var query = document.querySelector;

submit.addEventListener("click", function () {
    var firstName = form.elements["first-name"].value;
    var lastName = form.elements["last-name"].value;
    var age = form.elements["age"].value;
    var gender = form.elements["gender"].value;
    var location = form.elements["travel-location"].value;
    var diet = [];
    if (form.elements["Vegan"].checked) {
        diet.push(document.getElementById("Vegan").value);
    }
    if (form.elements["Vegitarian"].checked) {
        diet.push(document.getElementById("Vegitarian").value);
    }
    if (form.elements["Kosher"].checked) {
        diet.push(document.getElementById("Kosher").value);
    }
    if (form.elements["Gluten"].checked) {
        diet.push(document.getElementById("Gluten").value);
    }
    if (form.elements["Paleo"].checked) {
        diet.push(document.getElementById("Paleo").value);
    }
    if (form.elements["All Meat"].checked) {
        diet.push(document.getElementById("All Meat").value);
    }
    if (form.elements["Kosher"].checked) {
        diet.push(document.getElementById("Kosher").value);
    }

    alert("First Name: " + firstName +
        "\n" + "Last Name: " + lastName +
        "\nAge: " + age +
        "\nGender: " + gender +
        "\nTravel Location: " + location +
        "\nDiet: " + diet +
        "\nGreat! you will now be fed and flown to your favorite location!");
    });