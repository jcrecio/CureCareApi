const databaseAdapter = require('../database/databaseAdapter');

module.exports.getPatient = (patientId) => databaseAdapter.getPatient(patientId);
module.exports.insertPatient = (patient) => databaseAdapter.insertPatient(patient)
    .then(result => getInsertedPatient(result));
module.exports.updatePatient = (patientId, patient) => databaseAdapter.updatePatient(patientId, patient)
    .then(result => getUpdatedResult(result));
module.exports.deletePatient = (patientId) => databaseAdapter.deletePatient(patientId)
    .then(result => getUpdatedResult(result));

function getInsertedPatient(response) {
    return response.ops[0];
}

function getUpdatedResult(response) {
    return response.result && response.result.ok;
}