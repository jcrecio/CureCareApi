const databaseAdapter = require('../database/databaseAdapter');

module.exports.getPatient = (patientId) => databaseAdapter.getPatient(patientId);
module.exports.insertPatient = (patient) => databaseAdapter.insertPatient(patient);
module.exports.updatePatient = (patient) => databaseAdapter.updatePatient(patient);
module.exports.deletePatient = (patientId) => databaseAdapter.deletePatient(patientId)