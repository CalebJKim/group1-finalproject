const axios = require("axios");

const url = 'http://localhost:3000'

function axiosGetAll() { // should get everything and return it
    const promise = axios.get(url + '/all')
    const result = promise.then((response) => {
        console.log(response);
        //console.log('success')
        return response.data
      }, (error) => {
        console.log(error);
      })
    return result
}

function axiosGetMenuSpecific(location, time) { // should get specific menu
  const promise = axios.get(url + '/dining-hall-menu-time', { data: { diningHall: location, time: time } })
  const result = promise.then((response) => {
      console.log(response.data);
      //console.log('success')
      return response.data
    }, (error) => {
      console.log(error);
    })
  return result
}

axiosGetMenuSpecific("Cafe 3", "Breakfast")
axiosGetMenuSpecific("Clark Kerr Campus", "Dinner")