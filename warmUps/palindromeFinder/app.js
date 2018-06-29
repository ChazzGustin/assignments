function palindromeFinder(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
  }

module.export = palindromeFinder;

console.log(palindromeFinder("A man, a plan, a canal. Panama"));
console.log(palindromeFinder("Star Rats"));
console.log(palindromeFinder("My name is Chazz"));