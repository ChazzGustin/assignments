// 1)

function reverseStr(str) {
    var myStr = "";

    for (var i = str.length - 1; i >= 0; i--) {
        myStr += str[i];
    }
    return myStr;
}

var testStr = "Hello World"
console.log("\ntesting reserveStr");
console.log(`${testStr} >< ${reverseStr(testStr)}`);


// 2)

function isNum(str) {
 var test = str / 10;
 if (Number.isNaN(test)) {
     return false;
 } else return true;
}

testNum1 = "6";
testNum2 = "six";
console.log("\ntesting isNum");
console.log(`${testNum1}: ${isNum(testNum1)}`);
console.log(`${testNum2}: ${isNum(testNum2)}`);


// 3)

function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else return false;
}

console.log("\ntesting isEven");
console.log(`6: ${isEven(6)}`);
console.log(`3: ${isEven(3)}`);

// 4)

function arrAvg(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

testArr = [5, -10, 10, 20];

console.log("\ntesting arrAvg");
console.log(`test array: ${testArr} \naverage: ${arrAvg(testArr)}`);


// 5) 

function combineArr(arr1, arr2) {
    myArr = [];
    var totalItems = arr1.length + arr2.length;

    for (var i = 0; i < totalItems; i++) {
        if (i < arr1.length) {
            myArr.push(arr1[i]);
        }
        if (i < arr2.length) {
            myArr.push(arr2[i]);
        }
        }
    return myArr;
    }

arr1 = ["a", "b", "c"];
arr2 = [1, 2, 3];
console.log("\ntesting combineArr");
console.log(`test array 1: ${arr1} \ntest array 2: ${arr2} \ncombined: ${combineArr(arr1, arr2)}\n`);