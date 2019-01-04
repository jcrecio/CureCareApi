const MongoClient = require('mongodb').MongoClient;
const configuration = require('../configuration/settings');

const connect = () => MongoClient.connect(configuration.settings.databaseUrl);
module.exports.getPatient = (patientId) => connect()
    .then(database => database.collection('patients').findOne({ patientId: patientId }))
    .catch(function (err) {});

module.exports.insertPatient = (patient) => connect()
    .then(database => database.collection('patients').insertOne(patient))
    .catch(function (err) {});

module.exports.updatePatient = (patient) => connect()
    .then(database => database.collection('patients').updateOne(patient))
    .catch(function (err) {});

module.exports.removePatient = (patient) => connect()
    .then(database => database.collection('patients').deleteOne(patient))
    .catch(function (err) {});