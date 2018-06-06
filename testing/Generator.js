// 3. Add a FizzBuzz generator function that receives a number N generates a concatenated string with results from #1 from 1 ... N
let fizzbuzz = require("./FizzBuzz");

exports.gen_fb = function* (N) {
    let result = '';
    for (let i = 1; i <= N; i++) {
        yield result += " (" + i + " : " + fizzbuzz.fb(i) + ")";
    }
};


