// const helper = {};
const loadDir = require('../util/load_dir');

const helper = loadDir('src/helper');
console.dir(helper)
module.exports = {
    think: {
        helper
    },
    controller: {
        helper
    }
}