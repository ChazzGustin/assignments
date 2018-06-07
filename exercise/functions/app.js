/*function add(num1, num2) {  
    return num1 + num2;
}
var sum = add(13, 13);  
console.log(sum);


var array1 = [3, 13, 23];

console.log(Math.max(...array1));*/

var evenOrOdd = function(x,y){
    if (x % 2 === 0){
        return true
    }
    else if (y % 2 === 0) {
        return false
    }
}
console.log(evenOrOdd(5));
