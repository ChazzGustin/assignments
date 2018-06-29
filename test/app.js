const multiD1 = [[1, 2, 3], ["a", "b", "c"], [true, true, true]];
const multiD2 = [[true, false, true], [false, false, true]];

function checkTypes(arr) {
    let initial = arr[0][0];
    return arr.every(subArr =>
        subArr.every(value =>
            typeof (value) === typeof (initial)
        )
    )
}
console.log(checkTypes(multiD1));
console.log(checkTypes(multiD2));