/**
 * Roman Time!
 *
 * Implement the function that given a regular time,
 * e.g. "09:05" or "23:12" returns the same time but written in roman numbers.
 *
 * "09:05" -> IX:V
 *
 * Important!
 * 1. Roman numbers don't have 0 (surprise!). Use `N` instead
 * 2. You might get any number/word as an input. If the input is not valid, throw a TypeError.
 */

const NumToRoman = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    10: 'X',
    50: 'L',
};

function romanTime(time) {
    // little of your code and some magic
    return time;
}

module.exports = romanTime;


// Tests

const assert = require('assert');

// correct input
it('correct input "09:05" -> IX:V', function () {
    assert.equal(romanTime("09:05"), "IX:V");
});

it('correct input "12:25" -> XII:XXV', function () {
    assert.equal(romanTime("12:25"), "XII:XXV");
});

it('correct input "00:50" -> N:L', function () {
    assert.equal(romanTime("00:50"), "N:L");
});


// bad input
it('bad input "09:65" -> error', function () {
    assert.equal(romanTime("09:65"), error);
});

it('bad input "25:05" -> error', function () {
    assert.equal(romanTime("25:05"), error);
});
it('bad input "09.05" -> error', function () {
    assert.equal(romanTime("09.05"), error);
});
it('bad input "0905" -> error', function () {
    assert.equal(romanTime("0905"), error);
});
