const fs = require('fs');
const path = require('path');

const load = function (p, name) {
    if (name) {
        return require(path.join(p, name));
    }
    return require(p)
};

module.exports = function (dir) {
    const patcher = {},
    p = path.join(process.cwd(), dir);
    fs.readdirSync(p).forEach(function (filename) {
        if (!/\.js$/.test(filename)) {
            return;
        }
        let name = path.basename(filename, '.js');
        let _load = load(p, name);
        patcher[name] = _load;

    });
console.log('====',patcher.emailer.send)
    return patcher;
}