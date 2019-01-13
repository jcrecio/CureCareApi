const repo = require('../repository/patientRepo');
const failOnError = require('../validators/raiseIfErrors').raiseValidationErrors;
const logger = require('../log/logger');

exports.getPatient = function (patientId) {
    return repo.getPatient(patientId)
        .catch(err => { console.error('Service error: ', err); });
}

exports.insertPatient = function (bodyRequest) {
    return failOnError(validatePatientData(bodyRequest))
        .then(() => repo.insertPatient(bodyRequest))
        .catch(err => { logger.error('Service error: ', err); });
}

exports.updatePatient = function (patientId, bodyRequest) {
    return failOnError(validatePatientData(bodyRequest))
        .then(() => repo.updatePatient(patientId, bodyRequest))
        .catch(err => { logger.error('Service error: ', err); });
}

exports.deletePatient = function (patientId) {
    return repo.deletePatient(patientId)
        .catch(err => { console.error('Service error: ', err); });
}

function validatePatientData(bodyRequest) {
    let errors = [];
    if (!bodyRequest.patientId) {
        errors.push('Patient must have an identification like DNI, NIF, NIE, etc');
    }

    return errors;
}