const express = require('express');
const routing = require('./routing');
const bodyParser = require('body-parser');
const configuration = require('./configuration/settings').settings.endpoint;
const requestParamsValidator = require('./middleware/requestParamsValidator');
const logger = require('./log/logger');

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