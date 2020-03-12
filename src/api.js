const express = require('express');
const http = require('serverless-http');
const app = express();

app.get('/', (req, res) => {
  res.json({
    message: 'ok'
  });
});
const handler = http(app);
console.log('Handler: ', handler);

module.exports.handler = (...args) => {
  return handler(...args);
};
