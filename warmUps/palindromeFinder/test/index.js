var assert = require ("chai").assert;

//import the program
var palindromeFinder = require(index.js)

//create test case
var testCase = [
"Star Rats!",
"palindrome", 
"I madam, I made radio! So I dared! Am I mad?? Am I?!"
]
describe ("Testing palidrome finder function", function () {
    it("case 0 should return true", function(){
        assert.isTrue(palindromeFinder(testCase[0]));
});
    it("case 1 should return false", function (){
        assert.isNotTrue(palindromeFinder(testCase[1]));
});
    it("case 2 should return true", function (){

    })
    assert.isTrue(palindromeFinder(testcase[2]));
});
    console.log()