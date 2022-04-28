const axios = require('axios')

async function axiosTest2() {
    try {
      const response = await axios.get('https://caldining.p.rapidapi.com/menu', {headers: {
        'X-RapidAPI-Host': 'caldining.p.rapidapi.com',
        'X-RapidAPI-Key': 'ea2429bd76msha18639e38bbe961p1d3e5fjsn8f32d98beba5'
      }})
      return await response
    }
    catch(error) {
      console.log(error)
      return error
    }
}

async function getAllFood() { // returns a promise
    let result = await axiosTest2()
    foodJSON = result.data
    return foodJSON
}

async function getCafe3Menu() {

}