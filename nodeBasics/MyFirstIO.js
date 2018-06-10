const fs = require('fs');

const pathToFile = process.argv[2];

const content = fs.readFileSync(pathToFile).toString();

console.log(content.split("\n").length-1);
