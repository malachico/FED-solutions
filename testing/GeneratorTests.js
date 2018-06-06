// 2. Add some tests to #3
let gen = require("./Generator");
let chai = require("chai");
let expect = chai.expect;


// Generate 0


describe("0 generator tests", function () {
    let N = 0;
    let iterator = gen.gen_fb(N);
    let result = iterator.next(N);
    it("checks generator 0 returns value: undefined }", function () {
        expect(result.value).to.be.undefined;
    });

    it("checks generator 0 returns done: true }", function () {
        expect(result.done).to.be.true;
    });
});


// Generate 3
describe("3 generator tests", function () {
    let N = 3;
    iterator = gen.gen_fb(N);
    for (let i = 0; i < N - 1; i++) {
        iterator.next()
    }

    result = iterator.next();

    it("checks generator 3 returns value:  (1 : undefined) (2 : undefined) (3 : Fizz) }", function () {
        expect(result.value).to.equal(" (1 : undefined) (2 : undefined) (3 : Fizz)");
    });

    it("checks generator 3 returns done: false }", function () {
        expect(result.done).to.be.false;
    });
});


describe("fizzbuzz tests", function () {
    let result = null;
    let N = 15;
    let iterator = gen.gen_fb(N);

    // test 3 = Fizz
    for (let i = 0; i < N-1; i++) {
        iterator.next()
    }

    // test 5 = buzz
    result = iterator.next();
    it("checks generator 15 returns correct value", function (done) {
        expect(result.value).to.equal(' (1 : undefined) (2 : undefined) (3 : Fizz) (4 : undefined) (5 : Buzz) (6 : Fizz) (7 : undefined) (8 : undefined) (9 : Fizz) (10 : Buzz) (11 : undefined) (12 : Fizz) (13 : undefined) (14 : undefined) (15 : FizzBuzz)');
        done()
    });

});





