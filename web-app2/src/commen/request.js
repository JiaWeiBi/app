const axios = require('axios');

const instance = axios.create({
    baseURL: '/api/',
    timeout: 5000
  });

  module.exports = instance;