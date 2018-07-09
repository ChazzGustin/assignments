twoSum = (arr, target) => {
    for (let x = 0; x < arr.length; x++) {
        for (let y = x + 1; y < arr.length; y++) {
            if (arr[x] + arr[y] === target) {
                return [x, y];
            }
        }
    }
}

console.log(twoSum([1, 2, 3], 4));