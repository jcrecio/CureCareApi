const express = require('express');
const routes = require('./routing');

let app = express();
let port = process.env.PORT || 3000;

routes(app);

app.listen(port);