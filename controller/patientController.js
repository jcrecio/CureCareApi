const repo = require('../repository/patientRepo');
const patientService = require('../service/patientService');
const configuration = require('../configuration/settings').settings.endpoint;
const logger = require('../log/logger');
const requestHandler = require('../handlers/requestHandler');

exports.getPatient = function (req, res) {
  return patientService.getPatient(req.params.patientId)
    .then(patient => {
      if (!patient) {
        requestHandler.handleResponse(res, {
          responseCode: 404,
          content: `Patient with id ${req.params.patientId} not found`, 
          log: logger.error});

          return;
      }

      requestHandler.handleResponse(res, {
        responseCode: 200, 
        content: patient, 
        log: logger.info});
    })
    .catch(err => {
      requestHandler.handleResponse(res, {
        responseCode: 200, 
        content: patient, 
        log: logger.info});
    });
};

exports.insertPatient = function (req, res) {
  return patientService.insertPatient(req.body)
    .then(patientInserted => {
      const responseMessage = `Created patient on ${configuration.url}/patients/${patientInserted.patientId}`;

      res.statusCode = 201;
      res.send(responseMessage);

      console.log(responseMessage);
    })
    .catch(err => {
      const errorMessage = `Service error: ${err}`;

      res.statusCode = 400;
      res.send(errorMessage);

      console.error(errorMessage);
    });
};

exports.updatePatient = function (req, res) {
  repo.updatePatient(req.body);
  res.send('Updated patient:' + req.params.patientId);
};

exports.deletePatient = function (req, res) {
  repo.deletePatient(req.params.patientId);
  res.send('Updated patient:' + req.params.patientId);
};