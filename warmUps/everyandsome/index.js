//1) function every(arr, callback) {Write two functions that mimic the .every and .some array methods.
//every(arr, callback): Given an array and a callback function, return true or false based on whether each element of the array,
//when inserted as a parameter to the callback, returns true.
function every(arr, callback) { 
    for (let x = 0; x < arr.length; x++) {
        if(!callback(arr[x])) {
            return false;
        }
    }
    return true;
}
console.log(
    every([1,2,"3"], num => {
        return typeof num === "number";
    })
);
//2) some(arr, callback): Given an array and a callback function, 
//return true or false based on whether at least ONE element of the array,
//when inserted as a parameter to the callback, returns true.
function some(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return true;
        }
    }
    return false;
}

console.log(
    some(["ben", "jacob", "bob"], name => {
        return name === "jacob";
    })
);