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

// Number to roman map convert
const numToRomanMap = {
    0: '',
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
};

// Chain of responsibility
const chains = new Map();
chains.set(50, 'L');
chains.set(10, 'X');

// hh:mm regular expression
const timeRegExp = new RegExp('^([01]\\d|2[0-3]):([0-5]\\d)$');

function numToRoman(num) {
    let result = '';

    for (let [key, value] of chains.entries()) {
        while (num >= key) {
            result += value;
            num -= key;
        }
    }
    result += numToRomanMap[num];

    return result === '' ? 'N' : result;
}


function romanTime(time) {
    //check pattern
    if (timeRegExp.test(time) === false) {
        throw new TypeError("Bad input format. please insert hh:mm");
    }
    //split time
    var splitted = time.split(':');

    let hours = Number(splitted[0]);
    let minutes = Number(splitted[1]);

    return numToRoman(hours) + ":" + numToRoman(minutes);
}

module.exports = romanTime;


// Tests - Mocha

const assert = require('assert');

// Test reg exp
it('correct input "09:05" -> OK', function () {
    assert.equal(timeRegExp.test("09:05"), true);
});

it('correct input "23:59" -> OK', function () {
    assert.equal(timeRegExp.test("23:59"), true);
});

it('correct input "00:00" -> OK', function () {
    assert.equal(timeRegExp.test("00:00"), true);
});

it('Bad input format. please insert hh:mm "09:65" -> false', function () {
    assert.equal(timeRegExp.test("09:65"), false);
});

it('Bad input format. please insert hh:mm "09.05" -> false', function () {
    assert.equal(timeRegExp.test("9.05"), false);
});

it('Bad input format. please insert hh:mm "0905" -> false', function () {
    assert.equal(timeRegExp.test("0905"), false);
});

it('Bad input format. please insert hh:mm "24:05" -> false', function () {
    assert.equal(timeRegExp.test("24:05"), false);
});


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


// Bad input format. please insert hh:mm
it('Bad input format. please insert hh:mm "09:65" -> error', function () {
    const result = () => romanTime("09:65");
    assert.throws(result, TypeError("Bad input format. please insert hh:mm"))
});

it('Bad input format. please insert hh:mm "25:05" -> error', function () {
    const result = () => romanTime("25:05");
    assert.throws(result, TypeError("Bad input format. please insert hh:mm"))
});

it('Bad input format. please insert hh:mm "09.05" -> error', function () {
    const result = () => romanTime("09.05");
    assert.throws(result, TypeError("Bad input format. please insert hh:mm"))
});

it('Bad input format. please insert hh:mm "0905" -> error', function () {
    const result = () => romanTime("0905");
    assert.throws(result, TypeError("Bad input format. please insert hh:mm"))
});