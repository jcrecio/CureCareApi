const patientController = require('./controller/patientController');

module.exports = function(app) {

  app.route('/patients/:patientId')
    .get(patientController.getPatient)
    .put(patientController.updatePatient)
    .delete(patientController.deletePatient);

  app.route('/patients')
    .post(patientController.insertPatient);
};