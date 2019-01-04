const MongoClient = require('mongodb').MongoClient;
const configuration = require('../configuration/settings');

module.exports.connect = () => MongoClient.connect(configuration.settings.databaseUrl);