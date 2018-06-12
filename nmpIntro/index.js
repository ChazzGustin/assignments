var rs = require("readline-sync");

var userName = rs.question('May I have your name? ');
console.log('Hi ' + userName + '!');

var readlineSync = require('readline-sync'),
animals = ['Lion', 'Elephant', 'Crocodile', 'Giraffe', 'Hippo'],
index = readlineSync.keyInSelect(animals, 'Which animal?');
console.log('Ok, ' + animals[index] + ' goes to your room.');