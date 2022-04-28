const axios = require('axios')

const url = 'http://localhost:3000'

// adding data to own API
function axiosPost(foodJson) {
    const promise = axios.post(url + '/add/with-rating', foodJson)
    const result = promise.then((response) => {
        // console.log(response.config);
        console.log('successlly posted')
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
    //console.log(menu)
    for (var key of Object.keys(menu)) {
        category = [key]
        for (let i = 0; i < menu[key].length; i++) {
            category.push(menu[key][i]['Name'])
        }
        timeSpecificMenu.push(category)
    }
    console.log(timeSpecificMenu)
    return timeSpecificMenu
}

getMenu(1, 'Lunch')

function updateLocation(location) {
    if (location == "Cafe 3") {

    }
}

async function updateAPI() {
    var location = "Cafe 3"
    var time = "Breakfast"
    while (location < 4) {
        while (timeNumber < 3) {
            if (timeNumber == 0) {
                var time = 'Breakfast'
            }
        }
    }
}