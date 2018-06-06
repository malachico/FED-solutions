exports.fb = function (i) {
    switch (true) {
        case i % 3 === 0 && i % 5 === 0:
            return 'FizzBuzz';
        case i % 3 === 0:
            return 'Fizz';
        case i % 5 === 0:
            return 'Buzz';
    }
};

fizzBuzz = function () {
    for (let i = 1; i <= 100; i++) {
        console.log(i + " : " + fb(i));
    }
};

