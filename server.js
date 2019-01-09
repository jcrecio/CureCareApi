const express = require('express');
const routing = require('./routing');
const bodyParser = require('body-parser');
const configuration = require('./configuration/settings').settings.endpoint;

let app = configure();
let port = process.env.PORT || configuration.port;

app.listen(port, () => {
  console.log(`Node server running on http://${configuration.url}:${port}`);
});

function configure() {
  let app = express();

  app.use(bodyParser.json());
  routing(app);

  return app;
}

process.on('uncaughtException', (err) => {
  fs.writeSync(1, `Caught exception: ${err}\n`);
});