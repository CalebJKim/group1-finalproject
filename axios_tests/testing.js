const axios = require("axios");

const url = 'http://localhost:3000'

function axiosPostTest(foodJson) {
    const promise = axios.post(url + '/add', foodJson)
    const result = promise.then((response) => {
        // console.log(response.config);
        console.log('successlly posted')
      }, (error) => {
        console.log(error);
      })
    return result
}

function axiosGetTest() { // should get everything and return it
    const promise = axios.get(url + '/all')
    
    const result = promise.then((response) => {
        console.log(response.data);
        //console.log('success')
        return response.data
      }, (error) => {
        console.log(error);
      })
    return result
}

async function axiosGet2() {
    try {
        const {data:response} = await axios.get(url + '/all')
        return response
      }

      catch (error) {
        console.log(error);
      }
}

const testFood = {
    "diningHall": "Clark Kerr", 
    "category": "Blue Plate", 
    "time": "Breakfast", 
    "foodItem": "Ham and Cheese Scramble"
}

// axios({
//     method: 'post',
//     url: url + '/add',
//     data: testFood
//   });

axiosPostTest(testFood)
const result = axiosGetTest()
console.log(result)