const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const MongoConnect = callback => {
    MongoClient.connect(process.env.DB)
        .then(client => {
            console.log('Database connected');
            callback(client);
        })
        .catch(err => {
            console.log(err);
        });
};

module.exports = MongoConnect;
