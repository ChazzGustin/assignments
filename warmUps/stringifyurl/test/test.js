//imcomplete

const assert = require ("chai").assert
// import function we are testing
const {stringifyUrl, objectify} = require ("./index");

const testCase = [
    {
        url = "http://localhost:8080/monkeys",
        query = {  
            color: "black",
            species: "howler"
    },
    url = "http://localhost:8080/monkeys",
    query: {}}
]
describe("Test stringify ", () => {
    it("should return a url with parameters add at the end separated by & signs")
    assert.equal(stringifyUrl(testCasesStringify[0].url, testCasesStringify[0].query),
)
}); 
describe("Test objectify", () => {

});