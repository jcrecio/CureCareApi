let repo = require('../repository/patientRepo');

exports.getPatient = function(req, res) {
  res.send('id:' + req.params.patientId);
};

exports.insertPatient = function(req, res) {
  repo.insertPatient(req.body);
  res.send('Inserted patient:' + req.params.patientId);
};

exports.updatePatient = function(req, res) {
  repo.updatePatient(req.body);
  res.send('Updated patient:' + req.params.patientId);
};

exports.removePatient = function(req, res) {
  repo.removePatient(req.params.patientId);
  res.send('Updated patient:' + req.params.patientId);
};