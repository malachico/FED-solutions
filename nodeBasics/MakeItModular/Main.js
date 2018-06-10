const myModule = require("./Module");


const pathToDir = process.argv[2];
const postfix = process.argv[3];


myModule(pathToDir, postfix, function (err, data) {

    if(err){
        return err;
    }

    console.log(data.join('\n'));
});



