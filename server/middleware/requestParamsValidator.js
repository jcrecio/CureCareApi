const requestHandler = require('../handlers/requestHandler');
const logger = require('../log/logger');

exports.validate = function (req, res, next) {
  if (req.method === 'POST') return next();

  if (!req.params && !req.params.patientId) {
    requestHandler.handleResponse(res, {
      responseCode: 400,
      content: `No patientId especified`
    },
    logger.error);
  }

  next();
}