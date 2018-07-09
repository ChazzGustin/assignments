//1a)
function sum(x, y) {
    if (typeof x === "number" && typeof y === "number") {
        return x + y;
    } else {
        throw "Numbers needed"
    }
}

//console.log(sum("1","2"))

//1b)

try {
    sum ("1", "2")
} catch(err) {
    console.log(err)
}

//2a)

var user = {username: "sam", password: "123abc"};
function login(username, password){

}
    var login = function (username,password) {
        if(username === user.username && password === user.password) {
            console.log("Success!")
    } else {
        throw "Incorrect!"
    }
}

//2b)

try {
    login("sam", "123abc")
    login("span", "abc123")
} catch(err) {
    console.log(err)
}