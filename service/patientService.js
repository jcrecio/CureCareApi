let repo = require('../repository/patientRepo');
const failOnError = require('../validators/raiseIfErrors').raiseValidationErrors;

exports.insertPatient = function (bodyRequest) {
    return failOnError(validatePatientData(bodyRequest))
        .then(() => repo.insertPatient(bodyRequest))
        .then(response => getInsertedPatient(response))
        .catch(err => { console.error('Service error: ', err); });
}

exports.getPatient = function(query) {
    
}

function validatePatientData(bodyRequest) {
    let errors = [];
    if (!bodyRequest.patientId) {
        errors.push('Patient must have an identification like DNI, NIF, NIE, etc');
    }

    return errors;
}

function getInsertedPatient(response) {
    return response.ops[0];
}