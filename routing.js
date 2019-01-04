module.exports = function(app) {
  const patientController = require('../controller/patientController');

  app.route('/patients/:patientId')
     .get(patientController.getPatient)
     .post(patientController.insertPatient);
};