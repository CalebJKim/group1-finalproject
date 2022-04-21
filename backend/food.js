// database name = foods

const { resolveSoa } = require('dns');
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
    category: {
        type: String, 
        required: true
    }, 
    time: {
        type: String, 
        required: true
    }, 
    foodItem: {
        type: String, 
        required: true
    }, 
    rating: {
        type: Number
    }
})

const FOOD = mongoose.model('foods', foodSchema);

app.get("/all", (req, res) => {
    // fill in get request for all foods
    // not gonna be used in the app but very useful for future testing
    FOOD.find().then((food) => {
        res.json(food)
    })
})

app.get("/dining-halls", (req, res) => {
    // should return all the dining halls in existence
    FOOD.find().then((food) => {
        res.json(foodSchema.diningHall)
    })
})

app.get("/dining-hall-menu", (req, res) => { // works as intended (so far doesn't confuse with other menus)
    FOOD.find({ diningHall: req.body.diningHall }).then((food) => {
        res.json(food)
    })
})

app.post("/add", (req, res) => {
    const food = new FOOD({
        diningHall: req.body.diningHall,
        category: req.body.category,
        time: req.body.time,
        foodItem: req.body.foodItem
    })
    food.save((error, document) => {
        if (error) {
            res.json({ title: 'failure to add' })
        }
        else {
            res.json({  diningHall: req.body.diningHall,
                category: req.body.category,
                time: req.body.time, 
                foodItem: req.body.foodItem
            })
        }
    })
    // should allow for adding of food options to dining halls (must be specified)
})

app.post("/add/with-rating", (req, res) => {
    const food = new FOOD({
        diningHall: req.body.diningHall,
        category: req.body.category,
        foodItem: req.body.foodItem, 
        rating: req.body.rating
    })
    food.save((error, document) => {
        if (error) {
            res.json({ title: 'failure to add with rating' })
        }
        else {
            res.json({  foodItem: req.body.foodItem, 
                rating: req.body.rating
            })
        }
    })
    // should allow for adding of food options to dining halls (must be specified)
})

app.delete("/remove/all", (req, res) => {
    // should remove all foods for the day
    // likely useful when day changes
    FOOD.deleteMany({ }).then(function(){
        console.log("Cleared");
        res.end()
    }).catch(function(error){
        console.log(error);
    });
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})