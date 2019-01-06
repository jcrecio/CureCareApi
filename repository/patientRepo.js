const databaseAdapter = require('../database/databaseAdapter');

module.exports.getPatient = (patientId) => databaseAdapter.getPatient(patientId)
    .then(patient => patient) // map here what needed
    .catch(function (err) {});

module.exports.insertPatient = (patient) => databaseAdapter.insertPatient(patient); // map here what needed
    // .then(database => database.collection('patients').insertOne(patient))
    // .catch(function (err) {});

module.exports.updatePatient = (patient) => databaseAdapter.updatePatient(patient); // map here what needed

module.exports.deletePatient = (patientId) => databaseAdapter.deletePatient(patientId)