const MongoClient = require('mongodb').MongoClient;
const Server = require('mongodb').Server;
const configuration = require('../configuration/settings').settings.database;

const connect = () => {
    const url = `${configuration.url}:${configuration.port}/`;

    return MongoClient.connect(url);
}

module.exports.getPatient = (patientId) => connect()
    .then(database => database.collection('patients').findOne({ patientId: patientId }))
    .catch(function (err) { });

module.exports.insertPatient = (patient) => connect()
    .then(client => client.db(configuration.settings.databasePatients).collection('patients').insertOne(patient))
    .catch(function (err) { console.log(err); });

module.exports.updatePatient = (patient) => connect()
    .then(database => database.collection('patients').updateOne(patient))
    .catch(function (err) { });

module.exports.deletePatient = (patient) => connect()
    .then(database => database.collection('patients').deleteOne(patient))
    .catch(function (err) { });