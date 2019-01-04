const MongoClient = require('mongodb').MongoClient;

const mongoDbUrl = 'mongodb://localhost:27017';

const dbName = 'curecare';

module.exports.insert = function (patient) {
    MongoClient.connect(mongoDbUrl, function (err, client) {
        const db = client.db(dbName);
        db.collection('patients').insertOne(patient, function (err, r) {
            client.close();
        });
    });
};