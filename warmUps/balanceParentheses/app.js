const balanceStr = (str) => {
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "(") {
            count++
        } else if (str[i] === ")") {
            count--
            if (count < 0) {
                return false
            }
        }
    }
    return count === 0;
}

module.exports = balanceStr

console.log(balanceStr("("))    //F
console.log(balanceStr("()("))  //F
console.log(balanceStr("()"))   //T
console.log(balanceStr("()(())()()"))     //T
console.log(balanceStr("()(())()()()(())()()()(())()()(())"))   //T
console.log(balanceStr("()(()))(())()()(()))"))     //F

