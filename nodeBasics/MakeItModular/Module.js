const fs = require('fs');

module.exports = function getPostfixesInDir(dirPath, postfix, callback) {
    return fs.readdir(dirPath, function (err, data) {

        if(err){
            return callback(err);
        }

        const filenames = data.filter(x => x.endsWith("." + postfix));
        callback(null, filenames);

    });
};
