var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];  
var alphabet = "abcdefghijklmnopqrstuvwxyz";  
function nameLetter(arr, str) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i] + ":");
        for (var a = 0; a < str.length; a++) {
            newArr.push(str[a]);
        }
    }
    return newArr;
} 
console.log(nameLetter(people, alphabet));