const chai = require("chai");   
const assert = chai.assert;

const balanceStr = require("./app");

describe("Every opening parentheses needs to be followed with closing parentheses", () => {
    it("should return true if every opening parenthesis has a closing parenthesis.", () => {
        assert.isTrue(balanceStr("()"), true)
        assert.isTrue(balanceStr("()"), true)
        assert.isTrue(balanceStr("()()()"), true)
        assert.isFalse(balanceStr("("), false)
        assert.isFalse(balanceStr(")"), false)
        assert.isFalse(balanceStr("()("), false)
        assert.isFalse(balanceStr("())"), false)
    })
    it("Should return false if the closing parentheses is before the opening parentheses", () => {
        assert.isFalse(balanceStr(")("), false)
        assert.isFalse(balanceStr("())("), false)
    })
})