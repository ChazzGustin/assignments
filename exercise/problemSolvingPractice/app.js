function large(arr) {
    var big = arr[0];
    if (arr[0] === undefined) {
        console.log("The array was empty.");
    } else {
        for (i = 1; i < arr.length; i++) {
            if (arr[i] > big) {
                big = arr[i];
            }
        }
    }
    return big;
}
var testArr = [3, 5, 2, 8, 1];
console.log(large(testArr));

//
function lettersWithStrings(arr, char) {
    var resultArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(char) != -1) {
            resultArr.push((arr[i]));
        }
    }
    return resultArr;
}
testStrArr = ["#3", "$$$", "C%3!", "Hey!$"];
char =  "!";
console.log(`Find ${char} in: ${testStrArr}`);
console.log(lettersWithStrings(testStrArr, char));

//
function isDivisible(num1, num2) {
    if (num1 % num2 === 0) {
        return true;
    } else return false;
}
console.log(isDivisible(4, 2));
console.log(isDivisible(9, 3));
console.log(isDivisible(15, 4));