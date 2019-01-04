const databaseAdapter = require('../database/databaseAdapter');

module.exports.getPatient = (patientId) => databaseAdapter.connect()
    .then(database => database.collection('patients').findOne({ patientId: patientId }))
    .catch(function (err) {});

module.exports.insertPatient = (patient) => databaseAdapter.connect()
    .then(database => database.collection('patients').insertOne(patient))
    .catch(function (err) {});

module.exports.updatePatient = (patient) => databaseAdapter.connect()
    .then(database => database.collection('patients').update(patient))
    .catch(function (err) {});