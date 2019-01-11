const MongoClient = require('mongodb').MongoClient;
const Server = require('mongodb').Server;
const configuration = require('../configuration/settings').settings.database;

const connect = () => {
    const url = `${configuration.url}:${configuration.port}/`;
    return MongoClient.connect(url);
}

module.exports.getPatient = (patientId) => connect()
    .then(client => getPatientsCollection(client).findOne({ patientId: patientId }))
    .catch(function (err) { throw ('Get Database error: ', err); });

module.exports.insertPatient = (patient) => connect()
    .then(client => getPatientsCollection(client).insertOne(patient))
    .catch(function (err) { throw ('Insert Database error: ', err); });

module.exports.updatePatient = (patientId, patient) => connect()
    .then(client =>
        getPatientsCollection(client).updateOne({ "patientId": patientId }, { $set: { patient } }))
    .catch(function (err) { throw ('Update Database error: ', err); });

module.exports.deletePatient = (patient) => connect()
    .then(database => database.collection('patients').deleteOne(patient))
    .catch(function (err) { });

function getPatientsCollection(databaseClient) {
    return databaseClient.db(configuration.databasePatients).collection('patients');
}