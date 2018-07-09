//1)
function doubleNumbers(arr) {
    return arr.map(function (num) {
        return num * 2;
    })
}

console.log(doubleNumbers([2, 5, 100])); 

//2)
function stringItUp(arr) {
    return arr.map(function (num) {
        return num.toString();
    })
}

console.log(stringItUp([2, 5, 100]));  

//3)
function capitalizeNames(arr) {
    return arr.map(function(str) {
        return str.split(" ").map(function (item) {
            return item[0].toUpperCase() + item.slice(1).toLowerCase();
        }).join(" ");
    })
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));

//4)
function namesOnly(arr){
    return arr.map(function(obj) {
        return obj.name;
    })
}
var testArray = [  
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
];

console.log(namesOnly(testArray));

//5)
function makeStrings(arr) {
    return arr.map(function(obj) {
        if (obj.age > 17) {
            return `${obj.name} can go to The Matrix`;
        } else return `${obj.name} is under age!!`;
    })
}

console.log(makeStrings(testArray));

//6)
function readyToPutInTheDOM(arr){
    return arr.map(function(obj) {
        return `<h1>${obj.name}</h1><h2>${obj.age}</h2>`
    })
}

console.log(readyToPutInTheDOM(testArray));
