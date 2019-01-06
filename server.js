const express = require('express');
const routing = require('./routing');

let app = express();
let port = process.env.PORT || 3000;

routing(app);

app.listen(port, function() {
    console.log("Node server running on http://localhost:3000");
  });