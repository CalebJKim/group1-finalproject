// db name = auth-db

const express = require('express');
const bodyParser = require('body-parser');
const user = require('./routes/user')
const InitiateMongoServer = require("./config/db");

InitiateMongoServer();

const app = express();

app.use(bodyParser.json())

const port = process.env.PORT || 3030;

app.get("/", (req, res) => {
    res.json({ message: 'API working' });
})

app.use('/user', user)

app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}`);
})
