const request = require('postman-request')
const url =
'https://api.weatherstack.com/current?access_key=1e9da06300987ae65eb2b8a29c844ad9&query=-0.888046579860923,%20100.35332123901476'
request({ url: url }, (error, response) => {
//console.log(response)
const data = JSON.parse(response.body)
//console.log(data)
//console.log(data.current)
console.log(data.current.temperature)
})
