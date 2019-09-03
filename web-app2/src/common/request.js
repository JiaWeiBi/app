const axios = require('axios');

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8080/api/',
    timeout: 5000
  });

  module.exports = instance;