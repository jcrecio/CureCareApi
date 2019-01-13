const express = require('express');
const routing = require('./server/routing');
const bodyParser = require('body-parser');
const configuration = require('./server/configuration/settings').settings.endpoint;
const requestParamsValidator = require('./server/middleware/requestParamsValidator');
const logger = require('./server/log/logger');

let app = configure();
let port = process.env.PORT || configuration.port;

app.listen(port, () => {
  logger.info(`Node server running on http://${configuration.url}:${port}`);
});

function configure() {
  let app = express();

  app.use(bodyParser.json());
  app.use(requestParamsValidator.validate);
  routing(app);

  return app;
}

var a = 5;
