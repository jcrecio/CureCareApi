const express = require('express');
const routing = require('./server/routing');
const bodyParser = require('body-parser');
const configuration = require('./server/configuration/settings').settings.endpoint;
const corsConfiguration = require('./server/configuration/settings').settings.cors;
const requestParamsValidator = require('./server/middleware/requestParamsValidator');
const logger = require('./server/log/logger');
const cors = require('cors');

let app = configure();
let port = process.env.PORT || configuration.port;

app.listen(port, () => {
  logger.info(`Node server running on http://${configuration.url}:${port}`);
});

function getCorsOptions() {
  return {
    origin: function (origin, callback) {
      if (corsConfiguration.whitelist.indexOf(origin) !== -1 || !origin) {
        callback(null, true)
      } else {
        callback(new Error('Access forbidden to CureCare.'))
      }
    }
  }
}

function configure() {
  let app = express();

  app.use(cors(getCorsOptions()));
  app.use(bodyParser.json());
  app.use(requestParamsValidator.validate);
  routing(app);

  return app;
}