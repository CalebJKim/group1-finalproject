const axios = require("axios"); 

const options = { // THIS WORKS RARAJEIOFJASFOIJAF
  method: 'GET',
  url: 'https://caldining.p.rapidapi.com/menu',
  headers: {
    'X-RapidAPI-Host': 'caldining.p.rapidapi.com',
    'X-RapidAPI-Key': 'ea2429bd76msha18639e38bbe961p1d3e5fjsn8f32d98beba5'
  }
};

async function axiosTest() {
  const a = await axios.request(options).then(function (response) {
    return response.data
  }).catch(function (error) {
    console.error(error);
  });
  return a
}

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

async function main() {
  let result = await axiosTest2()
  foodJSON = result.data
  console.log(foodJSON)
  return foodJSON
}


//console.log(axiosTest2())
var a = await main()
//console.log(main())





// SUCCESSFULLY RETRIEVES THE DATA
// axios.request(options).then(function (response) {
//   console.log(response.data)
// }).catch(function (error) {
//   console.error(error);
// });