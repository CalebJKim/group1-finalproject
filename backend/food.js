// database name = foods

const { application } = require('express'); // i definitely did not type this so i think it somehow added but ima keep for now in case its necessary
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded());

const mongoose = require('mongoose');

const db = mongoose.connection;
const url = "mongodb://127.0.0.1:27017/foods";

mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });

const Schema = mongoose.Schema;
const foodSchema = Schema({
    diningHall: {
        type: String, 
        required: true
    },
    categories: {
        type: String, 
        required: true
    } // needs work cuz idk how nested schema or json-looking things work
})

const FOOD = mongoose.model('foods', foodSchema);

app.get("/", (req, res) => {
    // fill in get request for all foods
    // not gonna be used in the app but it seems useful for future testing
})

app.get("/dining-halls", (req, res) => {
    // should return all the dining halls in existence
})

app.post("/add", (req, res) => {
    // should allow for adding of food options to dining halls (must be specified)
    // tbh idk why we need this, but idk how just making a database will work so this it is :D
})



app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})