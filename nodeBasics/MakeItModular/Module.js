const fs = require('fs');

module.exports = function getPostfixesInDir(dirPath, postfix, cb) {
    return fs.readdir(dirPath, cb, postfix);
};
