let repo = require('../repository/patientRepo');
const patientService = require('../service/patientService');

exports.getPatient = function(req, res) {
  res.send('id:' + req.params.patientId);
};

exports.insertPatient = function(req, res) {
  patientService.insertPatient(req.body);

  res.statusCode = 201;
  res.send('Inserted patient');
};

exports.updatePatient = function(req, res) {
  repo.updatePatient(req.body);
  res.send('Updated patient:' + req.params.patientId);
};

exports.deletePatient = function(req, res) {
  repo.deletePatient(req.params.patientId);
  res.send('Updated patient:' + req.params.patientId);
};