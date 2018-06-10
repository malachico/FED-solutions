const fs = require('fs');

const pathToFile = process.argv[2];

fs.readFile(pathToFile, (err, data) => {
    if (err) {
        console.log(err);
        exit(1);
    }
    console.log(data.toString().split("\n").length - 1);

});

