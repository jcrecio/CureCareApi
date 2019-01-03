'use strict';

exports.getPatient = function(req, res) {
    res.send('id:' + req.params.patientId);
  };