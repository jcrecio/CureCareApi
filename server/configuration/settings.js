module.exports.settings = {
    endpoint: {
        url: 'localhost',
        port: 3000
    },
    database: {
        url: 'mongodb://localhost',
        port: 27017,
        databasePatients: 'databasePatients',
        databaseLog: 'databaseLog'
    },
    cors: {
        whitelist: ['http://localhost:3001', 'https://localhost:3001']
    }
}