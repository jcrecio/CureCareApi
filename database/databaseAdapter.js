const MongoClient = require('mongodb').MongoClient;
const Server = require('mongodb').Server;
const configuration = require('../configuration/settings');

const connect = () => {
    // const mongoClient = MongoClient.connect(
    //     new Server(configuration.settings.databaseUrl, configuration.settings.databasePort),
    //     { useNewUrlParser: true });

    const url = "mongodb://localhost:27017/";
    
    const mongoClient = MongoClient.connect(url);
    return mongoClient;
}

module.exports.getPatient = (patientId) => connect()
    .then(database => database.collection('patients').findOne({ patientId: patientId }))
    .catch(function (err) { });

module.exports.insertPatient = (patient) => connect()
    .then(client => {
        return client.db(configuration.settings.databasePatients).collections('patients').insertOne(patient);
    })
    .catch(function (err) { console.log(err); });

module.exports.updatePatient = (patient) => connect()
    .then(database => database.collection('patients').updateOne(patient))
    .catch(function (err) { });

module.exports.deletePatient = (patient) => connect()
    .then(database => database.collection('patients').deleteOne(patient))
    .catch(function (err) { });