const express = require('express');
const { ExpressAdapter } = require('ask-sdk-express-adapter');
const logApp = require('debug')('app');

const app = express();
const skill = require('./skill');
const adapter = new ExpressAdapter(skill, true, true);

const log = (req, res, next) => {
  console.log('Request incomming: ');
  console.log(req.method);
  console.log(req.baseUrl);
  next();
};
app.post('/', log, adapter.getRequestHandlers());

logApp('server started on port 3000');
app.listen(3000);
