let inputArray = ["this", "is", "an", "array"];

const arryCompare = arr => {
    let combinedArry = arr[1] + "," + arr[2] + "," + arr[3];
    for (let x = 1; x < arr.length - 2; x++) {
        let newArry = arr[x] + "," + arr[x + 2] + arr[x + 3];
        if (combinedArry.legnth < newArry.legnth) {
            combinedArray = newArray;
        }
    }
    return combinedArry.split(",");
}
    console.log(arryCompare(inputArray));