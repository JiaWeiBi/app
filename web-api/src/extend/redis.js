const Redis = require("ioredis");
const conf = require("../config/redis");
const $redis = new Redis(conf);

const context = {
    $redis
};
const think = {
    $redis
};
const controller = {
    $redis
};

const application = {
    $redis
};

const logic  = {
    $redis
};

module.exports = {
    context,
    think,
    controller,
    application,
    logic
}