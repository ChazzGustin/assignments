var cases = [1, 2, 3, 4, 5, 7];

function findMissingNo(arr){
       var sortedArr = arr.sort(function(a, b){
           return a - b;
        })
    for (var i = 0; i < sortedArr.length; i++) {   
    if (sortedArr[i] - sortedArr[i + 1] !== -1){
            return sortedArr[i] +1;
        }
    }
}

console.log(findMissingNo(cases));
