const databaseAdapter = require('../database/databaseAdapter');

module.exports.getPatient = (patientId) => databaseAdapter.getPatient(patientId);
module.exports.insertPatient = (patient) => databaseAdapter.insertPatient(patient);
module.exports.updatePatient = (patientId, patient) => databaseAdapter.updatePatient(patientId, patient);
module.exports.deletePatient = (patientId) => databaseAdapter.deletePatient(patientId)