let fizzbuzz = require("./FizzBuzz");
let chai = require("chai");
let expect = chai.expect;

// Fizz
describe("Fizz tests", function () {
    it("checks % 3 prints fizz", function () {
        expect(fizzbuzz.fb(3)).to.be.a("string");
    });

    it("checks % 3 prints Fizz", function () {
        expect(fizzbuzz.fb(3)).to.equal("Fizz");
    });
});

// Buzz
describe("Buzz tests", function () {
    it("checks % 5 prints Buzz", function () {
        expect(fizzbuzz.fb(5)).to.be.a("string");
    });

    it("checks % 5 prints Buzz", function () {
        expect(fizzbuzz.fb(5)).to.equal("Buzz");
    });
});

// FizzBuzz
describe("FizzBuzz tests", function () {
    it("checks % 3 and %5 prints FizzBuzz", function () {
        expect(fizzbuzz.fb(15)).to.be.a("string");
    });

    it("checks % 3 and %5 prints FizzBuzz", function () {
        expect(fizzbuzz.fb(15)).to.equal("FizzBuzz");
    });
});

// None
describe("None tests", function () {
    it("checks not % 3 and not %5 prints nothing", function () {
        expect(fizzbuzz.fb(2)).to.be.undefined;
    });

    it("checks % 3 and %5 prints FizzBuzz", function () {
        expect(fizzbuzz.fb(2)).to.equal(undefined);
    });
});
