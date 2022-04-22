const mongoose = require('mongoose');
const e = require('express');

const MONGOURI = 'mongodb://127.0.0.1:27017/auth-db';
const InitiateMongoServer = async () => {
    try {
        await mongoose.connect(MONGOURI, {
            useNewUrlParser: true,
        });
        console.log('Connected to DB');
    }
    catch {
        console.log(e);
        throw e;
    }
}

module.exports = InitiateMongoServer;