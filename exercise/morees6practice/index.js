//[GREEN CIRCLE]1/ Use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it:
function collectAnimals(...animals) {
    return animals;  
}
console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus", "zebra", "potato"));

//2 Make a food object with the array names as properties using Object Literals:
const fruit = ["apple", "pear"];  
const sweets = ["cake", "pie"];  
const vegetables = ["carrot"];

const food = { fruit, sweets, vegetables };
console.log(food);

//3 Use destructuring to fill in the blanks and use the property names as variables:
const vacation = {  
    location: "Burly Idaho",
    duration: "2 weeks"
  };
  
  var {location, duration} = vacation;
  console.log(`We're going to have a good time in ${location} for ${duration}`)  

//4 Use destructuring to make this code ES6:
//const firstItem = items[0];  
var items = ['x', 'y', 'z'];

var [first] = items;

console.log(first);

//5 Write destructuring code to assign variables that will help us print the expected string. Also, change the string to be using Template literals:
const favoriteActivitiesInOrder = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

var [firstFav, secondFav, thirdFav] = favoriteActivitiesInOrder;

console.log(`My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}`); 

//[BLUE SQUARE]6/ Use the Rest and Spread Operator to help take any number of arrays, and return one array. You will need to change how the arrays are passed in.
function combineAnimals(...arr) {
    var newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr = [ ...newArr, ...arr[i] ];
    }
    return newArr;
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));

//[BACK DIAMOND]7/ Try to make the following function more ES6xy:
//function product(a, b, c, d, e) {  
//  var numbers = [a,b,c,d,e];

function product(...numbers) {
    return numbers.reduce( (acc, number) => acc * number, 1)
}
console.log(product(1, 2, 3, 4, 5));

//8/ Make the following function more ES6xy. Use at least both the rest and spread operators:
//function unshift(array, a, b, c, d, e) {  
//    return [a, b, c, d, e].concat(array); 
// }
function unshift(...stuff) {
    return stuff.reduce((output, item) => [...output, ...item],);
}
console.log(unshift(["array"], "a", "b", "c", "d", "e"));

//[DOUBLE BLACK DIAMOND]9/ Write some destructuring code to help this function out. Use object literals to simplify it:
//function populatePeople(names){  
//    return names.map(function(name){
//        name = name.split(" ");
//        // your code
//        return {
//            firstName: firstName,
//            lastName: lastName
//        }
//}

//populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])  
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]
function populatePeople(names){
    return names.map(function(name) {
        name = name.split(" ");
        const [ firstName, lastName ] = name;
        return {
            firstName,
            lastName
        }
    });
}

const names = ["Frank Peterson", "Suzy Degual", "Liza Jones"];
console.log(populatePeople(names));