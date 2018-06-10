const fs = require('fs');

const pathToDir = process.argv[2];
const postfix = process.argv[3];

fs.readdir(pathToDir, (err, data) => {
    if (err) {
        console.log(err);
        exit(1);
    }

    const filenames = data.filter(x => x.endsWith("." + postfix));
    console.log(filenames.join("\n"));

});