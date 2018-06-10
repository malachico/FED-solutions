const myModule = require("./Module");


const pathToDir = process.argv[2];
const postfix = process.argv[3];


const cb = function (err, data) {

    if (err) {
        return callback(err);
    }

    const filenames = data.filter(x => x.endsWith("." + postfix));
    console.log(filenames.join("\n"));

};


myModule(pathToDir, postfix, cb);