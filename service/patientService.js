let repo = require('../repository/patientRepo');

exports.insertPatient = function (bodyRequest) {
    validatePatientData(bodyRequest);

    return repo.insertPatient(bodyRequest);
}

function validatePatientData(bodyRequest) {
    if (!bodyRequest.patientId) {
        throw 'Patient must have an identification like DNI, NIF, NIE, etc'
    }
}