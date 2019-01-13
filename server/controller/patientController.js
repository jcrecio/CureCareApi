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
        },
          logger.error);

        return;
      }

      requestHandler.handleResponse(res, {
        responseCode: 200,
        content: patient,
      },
        logger.info);
    })
    .catch(err => {
      requestHandler.handleResponse(res, {
        responseCode: 400,
        content: err,
      },
        logger.error);
    });
};

exports.insertPatient = function (req, res) {
  return patientService.insertPatient(req.body)
    .then(patientInserted => {
      requestHandler.handleResponse(res, {
        responseCode: 201,
        content: `Created patient on ${configuration.url}/patients/${patientInserted.patientId}`,
      },
        logger.info);
    })
    .catch(err => {
      requestHandler.handleResponse(res, {
        responseCode: 400,
        content: `Service error: ${err}`,
      },
        logger.error);
    });
};

exports.updatePatient = function (req, res) {
  return patientService.updatePatient(req.params.patientId, req.body)
    .then(patient => {
      if (!patient) {
        requestHandler.handleResponse(res, {
          responseCode: 404,
          content: `Patient with id ${req.params.patientId} not found`,
        },
          logger.error);

        return;
      }

      requestHandler.handleResponse(res, {
        responseCode: 204,
        content: `Patient with id ${req.params.patientId} updated`,
      },
        logger.info);
    });
}

exports.deletePatient = function (req, res) {
  return patientService.deletePatient(req.params.patientId)
  .then(patient => {
    if (!patient) {
      requestHandler.handleResponse(res, {
        responseCode: 404,
        content: `Patient with id ${req.params.patientId} not found`,
      },
        logger.error);

      return;
    }

    requestHandler.handleResponse(res, {
      responseCode: 204,
      content: `Operation went fine.`,
    },
      logger.info);
  })
  .catch(err => {
    requestHandler.handleResponse(res, {
      responseCode: 400,
      content: err,
    },
      logger.error);
  });
};