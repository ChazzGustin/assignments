/*const recurse = (x) => {
    //basecase
    if(x < 1) return "Loop Finished, x = $(x)";
    console.log(x);
    // recursion
    return recurse(x - 1);
}

console.log(recurse(10));*/

//recurse call a function its self
// base case = the thing that prevents it from looping forever
function gameOfThree(num, counter = 0) {
    if (num % 3 === 0) {
        return gameOfThree(num / 3, counter + 1);
    } else if (num === 1) {
        return counter;
    } else {
        num = (num + 1) % 3 === 0 ? num + 1 : num - 1;
        return gameOfThree(num / 3, counter + 1);
    }
}

console.log(gameOfThree(10));