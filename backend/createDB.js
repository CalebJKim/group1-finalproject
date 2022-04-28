const axios = require('axios')

const url = 'http://localhost:3000'

// adding data to own API
function axiosPost(foodJson) {
    const promise = axios.post(url + '/add', foodJson)
    const result = promise.then((response) => {
        console.log('successfully posted')
      }, (error) => {
        console.log(error);
      })
    return result
}

// getting data from API
async function getAllFood() { // returns a promise that holds response.data
    try {
      const response = await axios.get('https://caldining.p.rapidapi.com/menu', {headers: {
        'X-RapidAPI-Host': 'caldining.p.rapidapi.com',
        'X-RapidAPI-Key': 'ea2429bd76msha18639e38bbe961p1d3e5fjsn8f32d98beba5'
      }})
      return response.data
    }
    catch(error) {
      console.log(error)
      return error
    }
}

// 0 = Cafe 3
// 1 = Clark Kerr Campus
// 2 = Crossroads
// 3 = Foothill
async function getMenu(location, time) { // location is an int, time must be 'Breakfast', 'Lunch', or 'Dinner'
    let allFood = await getAllFood()
    let menu = JSON.parse(allFood)[location][time]
    timeSpecificMenu = []
    for (var key of Object.keys(menu)) {
        category = [key]
        for (let i = 0; i < menu[key].length; i++) {
            category.push(menu[key][i]['Name'])
        }
        timeSpecificMenu.push(category)
    }
    return timeSpecificMenu
}

function updateLocation(location) {
    if (location === "Cafe 3") {
        return "Clark Kerr Campus";
    }
    if (location === "Clark Kerr Campus") {
        return "Crossroads";
    }
    if (location === "Crossroads") {
        return "Foothill"
    }
    if (location === "Foothill") { 
        return "STOP LOCATION"
    }
    return "ERROR - LOCATION NOT FOUND" // shouldn't be reached
}

function locationNumber(location) {
    if (location == "Cafe 3") {
        return 0
    }
    if (location === "Clark Kerr Campus") {
        return 1
    }
    if (location === "Crossroads") {
        return 2
    }
    if (location === "Foothill") {
        return 3
    }
    return "ERROR - INVALID LOCATION" // shouldn't be reached
}

function updateTime(time) {
    if (time === "Breakfast") {
        return "Lunch"
    }
    if (time === "Lunch") {
        return "Dinner"
    }
    if (time === "Dinner") { 
        return "STOP TIME"
    }
    return "ERROR - TIME NOT FOUND" // shouldn't be reached
}

function createAndPostJSON(location, time, menu) {
    for (let i = 0; i < menu.length; i++) {
        let category = menu[i][0]
        for (let j = 1; j < menu[0].length; j++) {
            let tempJSON = {
                diningHall: location, 
                category: category, 
                time: time, 
                foodItem: menu[i][j]
            }
            axiosPost(tempJSON)
        }
    }
}

async function updateAPI() {
    var location = "Cafe 3"
    var time = "Breakfast"
    while (location !== "STOP LOCATION") {
        let number = locationNumber(location)
        while (time !== "STOP TIME") {
            let menu = await getMenu(number, time)
            createAndPostJSON(location, time, menu)
            time = updateTime(time)
        }
        location = updateLocation(location)
        time = "Breakfast"
    }
}
updateAPI()