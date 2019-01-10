const MongoClient = require('mongodb').MongoClient;
const Server = require('mongodb').Server;
const configuration = require('../configuration/settings').settings.database;

const connect = () => {
    const url = `${configuration.url}:${configuration.port}/`;
    return MongoClient.connect(url);
}

module.exports.getPatient = (patientId) => connect()
    .then(client => getPatientsCollection(client).findOne({ patientId: patientId }))
    .catch(function (err) { });

module.exports.insertPatient = (patient) => connect()
    .then(client => client.db(configuration.databasePatients).collection('patients').insertOne(patient))
    .catch(function (err) { console.log('Database error: '. err); });

module.exports.updatePatient = (patient) => connect()
    .then(database => database.collection('patients').updateOne(patient))
    .catch(function (err) { });

module.exports.deletePatient = (patient) => connect()
    .then(database => database.collection('patients').deleteOne(patient))
    .catch(function (err) { });

function getPatientsCollection(databaseClient){
    return databaseClient.db(configuration.databasePatients).collection('patients');
}