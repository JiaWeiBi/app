const view = require('think-view');
const model = require('think-model');
const cache = require('think-cache');
const session = require('think-session');
const mongo = require('think-mongo');
const dingxiang = require('../extend/dingxiang');
const redis = require('../extend/redis');

module.exports = [
  view, // make application support view
  model(think.app),
  cache,
  session,
  mongo(think.app),
  dingxiang,
  redis
];
