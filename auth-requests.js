const axios = require('axios')

const url = 'http://localhost:3030'

const axiosSignUp() {
    
}

const axiosLogOut() {

}

function axiosPost(foodJson) {
    const promise = axios.post(url + '/add', foodJson)
    const result = promise.then((response) => {
        console.log('successfully posted')
      }, (error) => {
        console.log(error);
      })
    return result
}